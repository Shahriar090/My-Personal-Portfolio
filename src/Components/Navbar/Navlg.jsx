import React from "react";
import { Link } from "react-router-dom";
import NavSm from "./NavSm";
import "./nav-styles/nav.css";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Navlg = () => {
  return (
    <nav className="relative">
      <div className="nav-container w-full h-auto hidden lg:block xl:block 2xl:block bg-slate-50 px-4 md:px-6 lg:px-10 py-3 fixed top-0 left-0 right-0 z-50">
        <div className="nav-items flex items-center justify-between">
          <div className="nav-logo text-[#05845a] font-serif font-bold text-xl">
            Shahriar Hossain
          </div>
          <div>
            <ul className="nav-items flex space-x-4 font-bold uppercase font-sans text-md ">
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/about-me">About Me</ActiveLink>
              </li>
              {/* <li>
                <ActiveLink>Projects</ActiveLink>
              </li> */}
              {/* <li>
                <ActiveLink>Say Hello</ActiveLink>
              </li> */}
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
