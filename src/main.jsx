import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./pages/Category/index.jsx";
import NotFoundPage from "./pages/NotFound/index.jsx";
import ProductDetailsPage from "./pages/ProductDetails/index.jsx";
import Home from "./pages/Home/index.jsx";
// import GeneralPages from "./pages/GeneralPages/index.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
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

async function enableMocking() {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser.js");
  return worker.start();
}

enableMocking().then(() => {
  return ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
