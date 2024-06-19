import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthForm from "./components/AuthForm.tsx";
import Auth from "./pages/Auth.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App  />
  },
  {
    path: "/",
    element: <Auth />, // Use SharedLayout como elemento principal
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "signin",
        element: <AuthForm type="sign-in" />
      },
      {
        path: "signup",
        element: <AuthForm type="sign-up" />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
