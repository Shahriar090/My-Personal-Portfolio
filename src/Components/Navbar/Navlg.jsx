import React from "react";
import { Link } from "react-router-dom";
import NavSm from "./NavSm";

const Navlg = () => {
  return (
    <nav>
      <div className="nav-container w-full h-auto hidden lg:block xl:block 2xl:block bg-white shadow-lg px-5 py-4">
        <div className="nav-items flex items-center justify-between">
          <div className="nav-logo text-black font-serif font-bold text-xl">
            Shahriar Hossain
          </div>
          <div>
            <ul className="nav-items flex space-x-4 font-bold uppercase font-sans text-md">
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
      </div>
      <div className="nav-sm">
        <NavSm></NavSm>
      </div>
    </nav>
  );
};

export default Navlg;
