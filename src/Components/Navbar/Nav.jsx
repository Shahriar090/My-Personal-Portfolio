import React from "react";
import Navlg from "./Navlg";
import NavSm from "./NavSm";

const Nav = () => {
  return (
    <div>
      <div className="nav-lg hidden lg:block ">
        <Navlg />
      </div>
      <div className="nav-sm lg:hidden ">
        <NavSm />
      </div>
    </div>
  );
};

export default Nav;
