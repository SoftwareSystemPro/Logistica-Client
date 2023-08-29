import { Route, Routes } from "react-router-dom";
import { DataRouters } from "./data-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Suspense } from "react";

function AllRouter() {
  return (
    <>
      <Header />
      <Routes>
        {DataRouters.map((elem, index) => (
          <Route
            key={index}
            path={elem.path}
            element={
              <Suspense fallback={<h1>Loading...</h1>}>{elem.Element}</Suspense>
            }
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default AllRouter;
