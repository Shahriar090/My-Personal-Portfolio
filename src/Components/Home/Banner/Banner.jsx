import React from "react";
import bannerImg from "../../../../src/assets/Shahriar.jpg";

const Banner = () => {
  return (
    <div className="banner-container w-full h-auto bg-white flex flex-col-reverse lg:flex-row gap-8 lg:gap-2 px-4 md:px-6 lg:px-10 py-4 md:py-6 lg:py-10">
      <div className="texts w-full lg:w-3/6  flex flex-col gap-4 items-start justify-center">
        <span className="text-lg md:text-xl lg:text-xl font-semibold uppercase font-sans">
          Hello, I am
        </span>
        <h1 className="text-xl md:text-3xl lg:text-4xl uppercase font-serif font-bold">
          Mohammad Shahriar Hossain
        </h1>
        <span className="text-lg md:text-xl lg:text-xl font-semibold uppercase text-[#05845a] font-sans">
          I am a Web Developer
        </span>
        <p className="text-lg font-sans">
          From Chittagong, Bangladesh, I am a React Js and Front End Web
          Developer with a passion for crafting flawless websites.Let's chat
          about turning your digital dreams into a reality.
        </p>
        <button className="btn btn-outline rounded-full bg-[#05845a] text-[#ecfef4] border-0 font-sans font-semibold animate-pulse hover:animate-none hover:bg-[#05845a]">
          Say Hello
        </button>
      </div>
      <div className="banner-img w-full lg:w-3/6">
        <picture>
          <img
            src={bannerImg}
            alt="Image Of Shahriar"
            className="w-full lg:w-3/4 mx-auto rounded-lg max-w-full"
          />
        </picture>
      </div>
    </div>
  );
};

export default Banner;
