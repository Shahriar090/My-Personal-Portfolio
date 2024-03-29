import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./social-icons.css";

const SocialLinks = () => {
  return (
    <div className="icons-container flex lg:flex-col gap-4 items-center justify-center bg-gray-50 p-3 rounded-sm">
      <li className="text-2xl md:text-3xl text-black ">
        <a href="https://www.facebook.com/Md.shahriarhossainsiyam">
          <CiFacebook />
        </a>
      </li>
      <li className="text-2xl md:text-3xl text-black">
        <a href="https://www.linkedin.com/in/shahriar-hossain-890baa280/">
          <CiLinkedin />
        </a>
      </li>
      <li className="text-2xl md:text-3xl  text-black">
        <a href={`tel:${+8801825018400}`}>
          {" "}
          <FaWhatsapp />
        </a>
      </li>
      <li className="text-2xl  md:text-3xl text-black">
        <a href="https://github.com/Shahriar090">
          {" "}
          <FaGithub />
        </a>
      </li>
    </div>
  );
};

export default SocialLinks;
