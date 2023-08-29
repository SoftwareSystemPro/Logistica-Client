import { lazy } from "react";

const Home = lazy(() => import("../layouts/Home/index"));
const AboutUs = lazy(() => import("../layouts/AboutUs/index"));
const Services = lazy(() => import("../layouts/Services/index"));
const More = lazy(() => import("../layouts/More/index"));
const Blog = lazy(() => import("../layouts/Blog/index"));
const Contact = lazy(() => import("../layouts/Contact/index"));

export const DataRouters = [
  {
    id: 1,
    path: "/",
    Element: <Home />,
  },
  {
    id: 2,
    path: "/aboutus",
    Element: <AboutUs />,
  },
  {
    id: 3,
    path: "/services",
    Element: <Services />,
  },
  {
    id: 4,
    path: "/more",
    Element: <More />,
  },
  {
    id: 5,
    path: "/blog",
    Element: <Blog />,
  },
  {
    id: 6,
    path: "/contact",
    Element: <Contact />,
  },
];
