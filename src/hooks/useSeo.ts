import { useEffect } from "react";

const OG_IMAGE = "https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/og-image-1776426551736.jpg";

const DEFAULT_TITLE = "Остеопат в Москве — частная практика Сергея Водопьянова";
const DEFAULT_DESC = "Частная остеопатическая практика в Москве на Новослободской. Работаю с болями в спине, шее, головными болями, восстановлением после травм. Запись на приём.";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

interface SeoOptions {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function useSeo({ title, description, ogTitle, ogDescription }: SeoOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute("content") ?? DEFAULT_DESC;
    const prevOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content") ?? DEFAULT_TITLE;
    const prevOgDesc = document.querySelector('meta[property="og:description"]')?.getAttribute("content") ?? DEFAULT_DESC;

    document.title = title;
    setMeta("description", description);
    setMeta("og:title", ogTitle ?? title, "property");
    setMeta("og:description", ogDescription ?? description, "property");
    setMeta("og:image", OG_IMAGE, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:title", ogTitle ?? title, "name");
    setMeta("twitter:description", ogDescription ?? description, "name");
    setMeta("twitter:card", "summary_large_image", "name");

    return () => {
      document.title = prevTitle;
      setMeta("description", prevDesc);
      setMeta("og:title", prevOgTitle, "property");
      setMeta("og:description", prevOgDesc, "property");
    };
  }, [title, description, ogTitle, ogDescription]);
}
