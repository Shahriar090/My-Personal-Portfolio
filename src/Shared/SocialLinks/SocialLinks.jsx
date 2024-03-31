import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./social-icons.css";

const SocialLinks = () => {
  return (
    <div className="icons-container flex lg:flex-col gap-4 items-center justify-center bg-gray-50 p-3 cursor-pointer">
      <li className="text-2xl sm:text-3xl text-black hover:scale-110 transition-all duration-300">
        <a
          href="https://www.facebook.com/Md.shahriarhossainsiyam"
          target="_blank"
        >
          <CiFacebook />
        </a>
      </li>
      <li className="text-2xl sm:text-3xl text-black hover:scale-110 transition-all duration-300">
        <a
          href="https://www.linkedin.com/in/shahriar-hossain-890baa280/"
          target="_blank"
        >
          <CiLinkedin />
        </a>
      </li>
      <li className="text-2xl sm:text-3xl  text-black hover:scale-110 transition-all duration-300">
        <a href={`tel:${+8801825018400}`} target="_blank">
          {" "}
          <FaWhatsapp />
        </a>
      </li>
      <li className="text-2xl  sm:text-3xl text-black hover:scale-110 transition-all duration-300">
        <a href="https://github.com/Shahriar090" target="_blank">
          {" "}
          <FaGithub />
        </a>
      </li>
    </div>
  );
};

export default SocialLinks;
