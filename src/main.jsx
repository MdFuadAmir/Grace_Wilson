import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./Router/router";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </HelmetProvider>
  </StrictMode>,
);
