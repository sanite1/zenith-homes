import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Lazy-loaded pages may not have rendered the target yet: retry briefly.
      let attempts = 0;
      let timer: number | undefined;
      const tryScroll = () => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 20) {
          attempts += 1;
          timer = window.setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
