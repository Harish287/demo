import React from "react";
import ReactDOM from "react-dom/client";
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import App from "./App";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";

import BodyCare from "./routes/bodycare";
import HairCare from "./routes/haircare";
import SkinCare from "./routes/skincare";
import Offers from "./routes/offers";
import Bridal from "./routes/bridal";
import Franchise from "./routes/franchise";
import AboutUs from "./routes/aboutus";
import Media from "./routes/media";
import SalonLocator from "./components/ourservices/salonlocator";
import Academy from "./routes/academy";
import Blog from "./routes/blog";
import ServiceForHer from "./components/ourservices/serviceforher";
import ServiceForHim from "./components/ourservices/serviceforhim";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "haircare",
        element: <HairCare />,
      },
      {
        path: "bodycare",
        element: <BodyCare />,
      },   {
        path: "bodycare",
        element: <BodyCare />,
      },
      {
        path: "skincare",
        element: <SkinCare />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "bridal",
        element: <Bridal />,
      },
      {
        path: "franchise",
        element: <Franchise />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "salonLocator",
        element: <SalonLocator />,
      },

      {
        path: "serviceforher",
        element: <ServiceForHer />,
      },
      {
        path: "serviceforhim",
        element: <ServiceForHim />,
      },
      {
        path: "academy",
        element: <Academy />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
