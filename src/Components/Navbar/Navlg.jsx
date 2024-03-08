import "./nav-styles/nav.css";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Navlg = () => {
  return (
    <header className=" bg-white h-16 fixed top-0 left-0 right-0 z-50 ">
      <nav className="nav-container w-full h-full max-w-screen-md mx-auto flex items-center justify-center">
        <ul className="nav-items flex gap-6 font-bold uppercase font-sans text-gray-600 text-lg">
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
      </nav>
    </header>
  );
};

export default Navlg;
