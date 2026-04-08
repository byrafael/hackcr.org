import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { HomePage } from "./components/home/HomePage.tsx";
import CodeOfConduct from "./CodeOfConduct.tsx";
import Team from "./Team.tsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
      </Routes>
    </>
  );
}
