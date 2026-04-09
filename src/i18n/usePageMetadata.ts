import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useLanguage } from "./LanguageProvider.tsx";

function getMetadataKey(pathname: string) {
  switch (pathname) {
    case "/team":
      return "team";
    case "/privacy":
      return "privacy";
    case "/terms":
      return "terms";
    case "/code-of-conduct":
      return "conduct";
    case "/":
    default:
      return "home";
  }
}

export function usePageMetadata() {
  const { pathname } = useLocation();
  const { copy } = useLanguage();

  useEffect(() => {
    const metadata = copy.metadata[getMetadataKey(pathname)];

    document.title = metadata.title;

    let descriptionTag = document.querySelector('meta[name="description"]');

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.append(descriptionTag);
    }

    descriptionTag.setAttribute("content", metadata.description);
  }, [copy, pathname]);
}
