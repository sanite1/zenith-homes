import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://zenithhomesafrica.com";

const setMeta = (
  attr: "name" | "property",
  key: string,
  content: string,
) => {
  let meta = document.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

interface PageMetaProps {
  title: string;
  description?: string;
}

const PageMeta = ({ title, description }: PageMetaProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    setMeta("property", "og:title", title);
    setMeta("name", "twitter:title", title);

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }

    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    setMeta("property", "og:url", url);
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, pathname]);

  return null;
};

export default PageMeta;
