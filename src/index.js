import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import react router
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
