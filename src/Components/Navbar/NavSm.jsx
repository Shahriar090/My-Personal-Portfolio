import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavSm = () => {
  return (
    <div>
      <nav>
        <div className="nav-container w-full h-auto bg-white shadow-lg lg:hidden xl:hidden 2xl:hidden ">
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
                  <CiMenuBurger className="text-xl"></CiMenuBurger>
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
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>About Me</Link>
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
            <div className="logo font-bold uppercase font-serif text-lg w-3/4">
              Shahriar Hossain
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavSm;
