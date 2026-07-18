import { Outlet } from "react-router-dom";
import SiteNav from "../components/nav/SiteNav";
import SiteFooter from "../components/footer/SiteFooter";

// The pill nav floats over each page's dark header, per the design.
const PlatformLayout = () => (
  <div className="relative">
    <header className="absolute inset-x-0 top-4 z-50 sm:top-6">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SiteNav />
      </div>
    </header>
    <Outlet />
    <SiteFooter />
  </div>
);

export default PlatformLayout;
