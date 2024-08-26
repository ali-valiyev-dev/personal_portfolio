import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ScrollToTop } from "./common";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ScrollToTop />
  </StrictMode>
);
