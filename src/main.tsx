import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted variable fonts (no external requests, no layout flash on repeat visits)
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

import "./styles/global.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
