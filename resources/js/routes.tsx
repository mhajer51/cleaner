import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { leftMenuBottomItems, leftMenuItems } from "@/menu-items";
import AppLayout from "@/pages/app/layout";
import AuthLayout from "@/pages/auth/layout";
import Loading from "@/pages/loading.tsx";
import NotFound from "@/pages/not-found";
import { MenuItem } from "@/types/types";

// Statically import all possible pages for build
const modules = import.meta.glob("./pages/**/page.tsx");

const authPageMap: Record<string, string> = {
  "/login": "/auth/sign-in",
  "/register": "/auth/sign-up",
  "/forgot-password": "/auth/password-reset",
  "/reset-password": "/auth/password-new",
  "/password-sent": "/auth/password-sent",
  "/verify-email": "/auth/get-verification",
  "/verify-email/confirm": "/auth/set-verification",
  "/terms-and-conditions": "/auth/terms-and-conditions",
  "/privacy-policy": "/auth/privacy-policy",
  "/admin/login": "/admin/login",
};

// Lazy load page components
const lazyLoad = (path: string) => {
  // Handle different paths based on the route
  let key: string;
  if (path === "/") {
    key = "./pages/page.tsx";
  } else if (authPageMap[path]) {
    key = `./pages${authPageMap[path]}/page.tsx`;
  } else if (path.startsWith("/admin")) {
    key = `./pages${path}/page.tsx`;
  } else if (path.startsWith("/auth")) {
    key = `./pages/auth${path.substring(5)}/page.tsx`; // Remove "/auth"
  } else {
    key = `./pages/app${path}/page.tsx`;
  }

  const importer = modules[key];

  // If file not found fallback to 404
  if (!importer) return <Navigate to="/404" replace />;

  const Component = React.lazy(importer as () => Promise<{ default: React.ComponentType<any> }>);

  return (
    <React.Suspense fallback={<Loading />}>
      <Component />
    </React.Suspense>
  );
};

// Recursively generate routes from menu items
const generateRoutesFromMenuItems = (menuItems: MenuItem[]): React.ReactElement[] => {
  return menuItems.flatMap((item: MenuItem) => {
    const routes: React.ReactElement[] = [];

    // Skip external links
    if (item.isExternalLink || !item.href) {
      return [];
    }

    // Add route for current item
    routes.push(<Route key={item.id} path={item.href} element={lazyLoad(item.href)} />);

    // Add routes for children
    if (item.children && item.children.length > 0) {
      routes.push(...generateRoutesFromMenuItems(item.children));
    }

    return routes;
  });
};

// Generate auth routes
const generateAuthRoutes = (): React.ReactElement[] => {
  return [
    <Route key="login" path="/login" element={lazyLoad("/login")} />,
    <Route key="register" path="/register" element={lazyLoad("/register")} />,
    <Route key="forgot-password" path="/forgot-password" element={lazyLoad("/forgot-password")} />,
    <Route key="reset-password" path="/reset-password" element={lazyLoad("/reset-password")} />,
    <Route key="reset-password-token" path="/reset-password/:token" element={lazyLoad("/reset-password")} />,
    <Route key="password-sent" path="/password-sent" element={lazyLoad("/password-sent")} />,
    <Route key="verify-email" path="/verify-email" element={lazyLoad("/verify-email")} />,
    <Route key="verify-email-confirm" path="/verify-email/confirm" element={lazyLoad("/verify-email/confirm")} />,
    <Route key="terms-and-conditions" path="/terms-and-conditions" element={lazyLoad("/terms-and-conditions")} />,
    <Route key="privacy-policy" path="/privacy-policy" element={lazyLoad("/privacy-policy")} />,
    <Route key="admin-login" path="/admin/login" element={lazyLoad("/admin/login")} />,
  ];
};

// Generate routes from both menu arrays
const mainRoutes = generateRoutesFromMenuItems(leftMenuItems);
const bottomRoutes = generateRoutesFromMenuItems(leftMenuBottomItems);
const authRoutes = generateAuthRoutes();

// Main Routes component
const AppRoutes = () => {
  return (
    <Routes>
      {/* Landing page route */}
      <Route path="/" element={lazyLoad("/")} />
      {/* App routes with AppLayout */}
      <Route element={<AppLayout />}>
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={lazyLoad("/admin/dashboard")} />
        {/* Routes generated from menu items */}
        {mainRoutes}
        {bottomRoutes}
      </Route>
      {/* Auth routes with AuthLayout */}
      <Route element={<AuthLayout />}>
        {authRoutes}
      </Route>

      {/* 404 route */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;
