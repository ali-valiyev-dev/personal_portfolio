import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Spinner } from "./common";

const App = lazy(() => import("./App.jsx"));
const ScrollToTop = lazy(() => import("./common/ScrollToTop.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
      <ScrollToTop />
    </Suspense>
  </StrictMode>
);
