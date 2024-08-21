import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./pages/Category/index.jsx";
import NotFoundPage from "./pages/NotFound/index.jsx";
import ProductDetailsPage from "./pages/ProductDetails/index.jsx";
// import GeneralPages from "./pages/GeneralPages/index.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "category/:name",
          element: <CategoryPage />,
        },
        {
          path: "product-details/:id",
          element: <ProductDetailsPage />,
        },
      ],
    },
  ],
  //   children: [
  //     {
  //       path: "",
  //       element: <GeneralPages />,

  // },
  // ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
