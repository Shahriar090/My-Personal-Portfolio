import React from "react";
import { Outlet } from "react-router-dom";
import "./main.css";
import Navlg from "../Components/Navbar/Navlg";

const Main = () => {
  return (
    <div>
      <Navlg></Navlg>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
