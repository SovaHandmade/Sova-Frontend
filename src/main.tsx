import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop.tsx";
import { Product } from "./pages/Product/Product.tsx";
import App from "./App.tsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product",
        element: <Product />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
