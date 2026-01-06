import "@/style/global.css";

import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import ContentWrapper from "@/components/layout/containers/content-wrapper";
import Header from "@/components/layout/containers/header";
import Main from "@/components/layout/containers/main";
import LeftMenu from "@/components/layout/menu/left-menu";
import MenuBackdrop from "@/components/layout/menu/menu-backdrop";
import { useAdminSession } from "@/hooks/use-admin-session";
import Loading from "@/pages/loading";

export default function AppLayout() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const { authenticated, loading } = useAdminSession();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  useEffect(() => {
    if (!loading && !authenticated) {
      navigate("/admin/login", { replace: true, state: { from: `${pathname}${search}` } });
    }
  }, [authenticated, loading, navigate, pathname, search]);

  if (loading) {
    return <Loading />;
  }

  if (!authenticated) {
    return null;
  }

  return (
    <>
      <Header />
      <LeftMenu />
      <Main>
        <ContentWrapper>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </ContentWrapper>
      </Main>
      <MenuBackdrop />
    </>
  );
}
