import { Outlet } from "react-router-dom";
import Navlg from "../Components/Navbar/Navlg";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navlg></Navlg>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
