import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './assets/globalStyles/index.css'
import { makeServer } from "./server/index.js";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={routes}/>
  </React.StrictMode>
);
