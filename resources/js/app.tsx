import "@/i18n/i18n";
import "@/style/global.css";
import "@fontsource/mulish/latin.css";
import "@fontsource/urbanist/latin.css";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";

import { LicenseInfo } from "@mui/x-license";

LicenseInfo.setLicenseKey(import.meta.env.VITE_MUIX_LICENSE_KEY || "");

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob("./pages/**/*.tsx")),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
