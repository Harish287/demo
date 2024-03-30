import React from "react";
import ReactDOM from "react-dom/client";

// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import App from "./App";
// import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";

import BodyCare from "./components/ourservices/bodycare";
import HairCare from "./components/ourservices/haircare";
import SkinCare from "./components/ourservices/skincare";
import Offers from "./routes/offers";

// bridal subdivision
import Bridal from "./routes/bridalnavbar/bridal";
import Home from "./routes/bridalnavbar/homes";
import Services from "./routes/bridalnavbar/services";
import Makeup from "./routes/bridalnavbar/makeup";
import Blogs from "./routes/bridalnavbar/blogs";
import Booknow from "./routes/bridalnavbar/booknow";
import Submit from "./routes/bridalnavbar/submit";

import Franchise from "./franchise";

import AboutUs from "./routes/aboutus";

import Media from "./routes/media";
// import SalonLocator from "./salonlocator";
// Academy subdivisions
// import Academy from "./academy";
import Homess from "./routes/acade/home";
import Franchises from "./routes/acade/franchises";
import About from "./routes/acade/about";
import Contact from "./routes/acade/contact";
import Ourcourse from "./routes/acade/ourcourse";
import Deploma from "./routes/acade/diploma-in-cosmetology-at-unikaa-beauty-academy";
import Whytochoose from "./routes/acade/why-choose-naturals-beauty-academy";
import Academysubmit from "./routes/acade/academysubmit";

import Blog from "./routes/blog";
import ServiceForHer from "./serviceforher";
import ServiceForHim from "./serviceforhim";
import PrivacyPolicy from "./privacypolicy";
import Logo from "./logo";

import Franchisesubmit from "./franchisesubmit";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/",
        element: <Logo />,
      },

      {
        path: "/logo",
        element: <App />,
      },

      {
        path: "haircare",
        element: <HairCare />,
      },
      {
        path: "bodycare",
        element: <BodyCare />,
      },
      {
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
      // {
      //   path: "salonLocator",
      //   element: <SalonLocator />,
      // },

      {
        path: "serviceforher",
        element: <ServiceForHer />,
      },
      {
        path: "serviceforhim",
        element: <ServiceForHim />,
      },

      {
        path: "blog",
        element: <Blog />,
      },
      { path: "franchisesubmit", 
      element: <Franchisesubmit /> },
    ],
  },
  // **************************bridal********************//
  {
    path: "bridal",
    element: <Bridal />,
  },
  {
    path: "homes",
    element: <Home />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "makeup",
    element: <Makeup />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path: "booknow",
    element: <Booknow />,
  },
  { path: "submit", element: <Submit /> },
  // ************************************************Acadamy*************************************//
  {
    path: "academy",
    element: <Homess />,
  },
  {
    path: "home",
    element: <Homess />,
  },
  {
    path: "franchises",
    element: <Franchises />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "ourcourse",
    element: <Ourcourse />,
  },
  { path: "academysubmit", element: <Academysubmit /> },
  {
    path: "/diploma-in-cosmetology-at-unikaa-beauty-academy",
    element: <Deploma />,
  },

  {
    path: "/why-choose-naturals-beauty-academy",
    element: <Whytochoose />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
