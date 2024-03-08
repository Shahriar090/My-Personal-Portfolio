import { Outlet } from "react-router-dom";
import Navlg from "../Components/Navbar/Navlg";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/Nav";

const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
