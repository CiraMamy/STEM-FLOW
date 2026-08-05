import { useEffect } from "react";
import { SITE_URL } from "@/lib/site";

interface SEOProps {
  title: string;
  description: string;
  /** Chemin canonique de la page, ex. "/projet". */
  path?: string;
  /** Image de partage absolue ou relative a la racine du site. */
  image?: string;
}

const BASE_TITLE = "LearnXScience";

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export function useSEO({ title, description, path, image }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(BASE_TITLE) ? title : `${title} | ${BASE_TITLE}`;
    document.title = fullTitle;

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);

    const url = `${SITE_URL}${path ?? window.location.pathname}`.replace(/\/+$/, "") || SITE_URL;
    setMeta('meta[property="og:url"]', url);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    if (image) {
      const absolute = image.startsWith("http") ? image : `${SITE_URL}${image}`;
      setMeta('meta[property="og:image"]', absolute);
      setMeta('meta[name="twitter:image"]', absolute);
    }
  }, [title, description, path, image]);
}
