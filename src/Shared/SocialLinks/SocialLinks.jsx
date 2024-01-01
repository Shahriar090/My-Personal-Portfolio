import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./social-icons.css";

const SocialLinks = () => {
  return (
    <div className="icons-container flex lg:flex-col gap-5 items-center justify-center bg-[#ecfef4] rounded-full p-3">
      <li className="text-xl md:text-xl lg:text-2xl  text-black">
        <a href="https://www.facebook.com/Md.shahriarhossainsiyam">
          <CiFacebook />
        </a>
      </li>
      <li className="text-xl md:text-xl lg:text-2xl  text-black">
        <a href="https://www.linkedin.com/in/shahriar-hossain-890baa280/">
          <CiLinkedin />
        </a>
      </li>
      <li className="text-xl md:text-xl lg:text-2xl  text-black">
        <a href={`tel:${+8801825018400}`}>
          {" "}
          <FaWhatsapp />
        </a>
      </li>
      <li className="text-xl md:text-xl lg:text-2xl  text-black">
        <a href="https://github.com/Shahriar090">
          {" "}
          <FaGithub />
        </a>
      </li>
    </div>
  );
};

export default SocialLinks;
