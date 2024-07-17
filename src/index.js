import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddBook from "./pages/addBook";
import BookDetails from "./pages/bookDetails";
import BooksList from "./pages/booksList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksList />,
  },
  {
    path: "/add-book",
    element: <AddBook />,
  },
  {
    path: "/:bookId",
    element: <BookDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
