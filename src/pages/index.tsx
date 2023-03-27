import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const BooksAllPage = lazy(() => import("./books-all"));
const BooksProfilePage = lazy(() => import("./books-profile"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<BooksAllPage />} />
      <Route path="/book/:id" element={<BooksProfilePage />} />
    </Routes>
  );
};

export const routes = <Routing></Routing>;
