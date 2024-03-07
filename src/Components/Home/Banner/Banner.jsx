import React from "react";
import bannerImg from "../../../../src/assets/Shahriar.jpg";
import SocialLinks from "../../../Shared/SocialLinks/SocialLinks";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container relative w-full h-auto bg-white flex flex-col-reverse lg:flex-row gap-8 lg:gap-2 px-4 md:px-6 lg:px-10 py-4 md:py-6 lg:py-10 ">
      <div className="texts flex-1 flex flex-col gap-4 lg:gap-5 items-start justify-center">
        <span className="text-xl sm:text-2xl font-semibold uppercase font-sans text-black">
          Hello, I am
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase font-serif font-bold tracking-wide text-black">
          Mohammad Shahriar Hossain
        </h1>
        <span className="text-xl sm:text-2xl font-semibold uppercase text-[#05845a] font-sans">
          I am a Web Developer
        </span>
        <p className="text-lg sm:text-xl font-sans text-black">
          From Chittagong, Bangladesh, I am a React Js and Front End Web
          Developer with a passion for crafting flawless websites.Let's chat
          about turning your digital dreams into a reality.
        </p>
        <div className="buttons flex flex-col lg:flex-row gap-2 py-2">
          <Link to="/contact">
            <button className="btn btn-outline bg-[#04724D] text-[#ecfef4] border-0 font-sans font-semibold hover:bg-[#05845a] hover:rotate-6">
              Say Hello
            </button>
          </Link>
          <button className="btn btn-outline bg-[#04724D] text-[#ecfef4] border-0 font-sans font-semibold hover:bg-[#05845a] hover:rotate-6">
            View Resume
          </button>
        </div>
      </div>
      <div className="banner-img flex-1">
        <picture>
          <img
            src={bannerImg}
            alt="Image Of Shahriar"
            className="w-full lg:w-3/4 mx-auto rounded-lg max-w-full"
          />
        </picture>
      </div>
      {/* social links */}
      <div className="social-links-container absolute  right-1 bottom-5 lg:bottom-44">
        <SocialLinks></SocialLinks>
      </div>
    </div>
  );
};

export default Banner;
