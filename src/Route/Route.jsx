import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ApplicationForm from "../pages/ApplicationForm/ApplicationForm";
import ContactPage from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,   // 👈 instead of path: "/"
        element: <Home />,
      },
      {
        path: "/applicationForm",
        element: <ApplicationForm/>
      },
      {
        path: "/contact",
        element: <ContactPage/>
      }
    ],
  },
]);

export default router;