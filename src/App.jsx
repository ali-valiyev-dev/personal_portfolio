import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./sections/NotFound";
import { Spinner } from "./common";
import { Suspense, useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Layout />
            </Suspense>
          }
        />

        <Route
          path="/:lang"
          element={
            <Suspense fallback={<Spinner />}>
              <Layout />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
