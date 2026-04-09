import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { FloatingLanguageSwitcher } from "./components/common/FloatingLanguageSwitcher.tsx";
import { HomePage } from "./components/home/HomePage.tsx";
import { usePageMetadata } from "./i18n/usePageMetadata.ts";
import CodeOfConduct from "./CodeOfConduct.tsx";
import Team from "./Team.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import TermsOfService from "./TermsOfService.tsx";

const SCROLL_STORAGE_KEY_PREFIX = "scroll-position:";

function getScrollStorageKey(pathname: string): string {
  return `${SCROLL_STORAGE_KEY_PREFIX}${pathname}`;
}

function saveScrollPosition(pathname: string): void {
  window.sessionStorage.setItem(getScrollStorageKey(pathname), String(window.scrollY));
}

function restoreScrollPosition(pathname: string): void {
  const savedPosition = window.sessionStorage.getItem(getScrollStorageKey(pathname));
  const parsedPosition = Number(savedPosition);

  if (Number.isFinite(parsedPosition) && parsedPosition >= 0) {
    window.scrollTo(0, parsedPosition);
    return;
  }

  window.scrollTo(0, 0);
}

function ScrollRestoration() {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const priorPath = previousPathname.current;
    if (priorPath !== pathname) {
      saveScrollPosition(priorPath);
      previousPathname.current = pathname;
    }

    const frame = window.requestAnimationFrame(() => {
      restoreScrollPosition(pathname);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      saveScrollPosition(pathname);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [pathname]);

  return null;
}

function MetadataSync() {
  usePageMetadata();

  return null;
}

export default function App() {
  return (
    <>
      <ScrollRestoration />
      <MetadataSync />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <FloatingLanguageSwitcher />
    </>
  );
}
