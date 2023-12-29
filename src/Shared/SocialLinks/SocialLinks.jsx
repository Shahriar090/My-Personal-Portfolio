import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./social-icons.css";

const SocialLinks = () => {
  return (
    <div className="icons-container flex lg:flex-col gap-5 items-center justify-center bg-[#ecfef4] rounded-full p-3">
      <li className="text-lg md:text-xl lg:text-2xl  text-black">
        <Link>
          <CiFacebook />
        </Link>
      </li>
      <li className="text-lg md:text-xl lg:text-2xl  text-black">
        <Link>
          <CiLinkedin />
        </Link>
      </li>
      <li className="text-lg md:text-xl lg:text-2xl  text-black">
        <Link>
          <FaWhatsapp />
        </Link>
      </li>
      <li className="text-lg md:text-xl lg:text-2xl  text-black">
        <Link>
          <FaGithub />
        </Link>
      </li>
    </div>
  );
};

export default SocialLinks;
