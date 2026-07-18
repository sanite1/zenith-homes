import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PlatformLayout from "../layouts/PlatformLayout";
import ScrollToTop from "@/components/shared/ScrollToTop";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"));
const Projects = lazy(() => import("../pages/Projects"));
const Experience = lazy(() => import("../pages/Experience"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-cream-200 border-t-gold-400" />
  </div>
);

export const PlatformRoutes = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<PlatformLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
