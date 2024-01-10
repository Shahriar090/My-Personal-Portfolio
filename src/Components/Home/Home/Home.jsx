import React from "react";
import Navlg from "../../Navbar/Navlg";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import AboutMe from "../../AboutMe/AboutMe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
