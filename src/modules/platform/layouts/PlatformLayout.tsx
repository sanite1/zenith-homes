import { Outlet } from "react-router-dom";
import SiteNav from "../components/nav/SiteNav";
import SiteFooter from "../components/footer/SiteFooter";

// The pill nav stays fixed to the top of the viewport on every page.
const PlatformLayout = () => (
  <div className="relative">
    <header className="fixed inset-x-0 top-4 z-50 sm:top-6">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SiteNav />
      </div>
    </header>
    <Outlet />
    <SiteFooter />
  </div>
);

export default PlatformLayout;
