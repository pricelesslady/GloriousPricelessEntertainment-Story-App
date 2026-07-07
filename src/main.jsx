import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";

import App from "./App";
import { ReadingPreferencesProvider } from "./content/ReadingPreferencesContext";
import { PWAProvider } from "./context/PWAContext"; // 👈 1. Import your new PWA provider

import "./index.css";

// Register the PWA Service Worker
registerSW({
  immediate: true,
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <PWAProvider> {/* 👈 2. Wrap everything here */}
        <ReadingPreferencesProvider>
          <App />
        </ReadingPreferencesProvider>
      </PWAProvider>
    </BrowserRouter>
  </StrictMode>
);
