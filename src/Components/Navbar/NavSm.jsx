import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./nav-styles/nav.css";
import ActiveLink from "../../ActiveLink/ActiveLink";

const NavSm = () => {
  return (
    <nav className="relative">
      <div className="nav-container w-full h-auto bg-slate-50  lg:hidden xl:hidden 2xl:hidden fixed top-0 left-0 right-0 z-50">
        <div className="nav-items flex items-center gap-3">
          {/* drawer */}
          <div className="drawer  w-3/12">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-outline border-0 drawer-button"
              >
                <CiMenuBurger className="text-xl text-[#05845a]"></CiMenuBurger>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="drawer-items flex flex-col space-y-4 text-lg p-6 uppercase w-48 min-h-full bg-white text-black">
                {/* Sidebar content here */}
                <li>
                  <ActiveLink to="/">Home</ActiveLink>
                </li>
                <li>
                  <ActiveLink to="about-me">About Me</ActiveLink>
                </li>
                <li>
                  <Link>Projects</Link>
                </li>
                <li>
                  <Link>Say Hello</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* logo */}
          <div className="logo font-bold uppercase font-serif text-lg w-3/4 text-[#05845a]">
            Shahriar Hossain
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSm;
