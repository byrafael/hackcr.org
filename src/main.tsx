import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.tsx";
import { LanguageProvider } from "./i18n/LanguageProvider.tsx";
import "./style.css";

const container = document.querySelector("#app");

if (!container) {
  throw new Error("App root #app was not found.");
}

createRoot(container).render(
  <StrictMode>
    <LanguageProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </LanguageProvider>
  </StrictMode>,
);
