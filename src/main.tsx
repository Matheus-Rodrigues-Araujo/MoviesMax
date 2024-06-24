import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthForm from "./components/AuthForm.tsx";
import Auth from "./pages/Auth.tsx";
import Explore from "./pages/Explore.tsx";
import Content from "./components/Content.tsx";
import Error from "./components/Error.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: "sign-in",
        element: <AuthForm type="sign-in" />,
      },
      {
        path: "sign-up",
        element: <AuthForm type="sign-up" />,
      },
    ],
  },
  {
    path: "explore",
    element: <Explore />,
    children: [
      {
        path: "",
        element: <Content />,
      },
      {
        path: "series",
        element: <Content />,
      },
      {
        path: "movies",
        element: <Content />,
      },
      {
        path: "my-list",
        element: <Content />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
