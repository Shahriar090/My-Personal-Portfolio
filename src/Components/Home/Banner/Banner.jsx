import React from "react";
import bannerImg from "../../../../src/assets/Shahriar.jpg";
import SocialLinks from "../../../Shared/SocialLinks/SocialLinks";
import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import Button from "../../../ui/Button";

const Banner = () => {
  return (
    <section className="bg-white relative">
      <Container>
        <div className="banner-container h-full sm:h-screen  flex items-center flex-col-reverse lg:flex-row gap-8 lg:gap-0">
          <div className="texts flex-1 flex flex-col gap-4 lg:gap-5 items-start justify-center">
            <span className="text-xl sm:text-2xl font-medium uppercase text-gray-800">
              Hello, I am
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-5xl uppercase font-bold tracking-wide text-black">
              Mohammad Shahriar Hossain
            </h1>
            <span className="text-xl sm:text-2xl font-medium uppercase text-[#05845a]">
              I am a Web Developer
            </span>
            <p className="text-lg sm:text-xl  text-gray-800">
              From Chittagong, Bangladesh, I am a React Js and Front End Web
              Developer with a passion for crafting flawless websites.Let's chat
              about turning your digital dreams into a reality.
            </p>
            <div className="buttons flex flex-col lg:flex-row gap-2 py-2">
              <Link to="/contact">
                {/* reusable button */}
                <Button>Say Hello</Button>
              </Link>
              <Button variant="outline">View Resume</Button>
            </div>
          </div>
          <div className="banner-img flex-1">
            <picture>
              <img
                src={bannerImg}
                alt="Image Of Shahriar"
                className="w-full lg:w-3/4 sm:ml-auto rounded-lg max-w-full"
              />
            </picture>
          </div>
          {/* social links */}
          <div className="social-links-container absolute lg:fixed right-2 bottom-5 lg:bottom-44">
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
