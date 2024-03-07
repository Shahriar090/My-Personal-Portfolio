import React from "react";
import { Link } from "react-router-dom";
import NavSm from "./NavSm";
import "./nav-styles/nav.css";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Navlg = () => {
  return (
    <nav className="relative">
      <div className="nav-container w-full h-auto max-w-screen-md mx-auto hidden lg:block xl:block 2xl:block bg-[#ecfef4] bg-opacity-30 px-4 md:px-6 lg:px-10 py-3 fixed top-0 left-0 right-0 z-50 rounded-full">
        <div className="nav-items flex items-center justify-center">
          <div>
            <ul className="nav-items flex space-x-4 font-bold uppercase font-sans text-md ">
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/about-me">About Me</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/projects">Projects</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/contact">Say Hello</ActiveLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-sm">
        <NavSm></NavSm>
      </div>
    </nav>
  );
};

export default Navlg;
