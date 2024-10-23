import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { Order } from "./pages/Order";
import { Product } from "./pages/Product";
import { Profile } from "./pages/Profile";
import { AboutMe } from "./pages/AboutMe";
import { AuthPage } from "./pages/AuthPage";
import { NotFound } from "./pages/NotFound";
import { CreateProduct } from "./pages/CreateProduct";

import App from "./App.tsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "not-found",
        element: <NotFound />,
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "product/create",
        element: <CreateProduct />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/not-found" replace={true} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
