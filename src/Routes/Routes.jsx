import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Main from "../Layouts/Main";
import AboutMe from "../Components/AboutMe/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-me",
        element: <AboutMe></AboutMe>,
      },
    ],
  },
]);
