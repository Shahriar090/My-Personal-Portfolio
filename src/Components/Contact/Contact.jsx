import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import contactImg from "../../assets/Contact/talking-white-bg.png";
const Contact = () => {
  return (
    <div>
      <section>
        <SectionTitle
          heading={"Let's Talk"}
          subHeading={"& Work Together"}
        ></SectionTitle>
      </section>
      {/* main content */}
      <section className="main-content bg-white px-4 md:px-6 lg:px-10 py-4 md:py-6 lg:py-10">
        <div className="parent-div flex flex-col items-center md:flex-row lg:flex-row gap-5 ">
          {/* contact section image, address related topic */}
          <div className="child-one w-full  md:w-full lg:w-3/6 flex flex-col gap-4">
            <picture>
              <img
                src={contactImg}
                alt="Contact Image"
                className="w-full md:w-3/4 lg:w-3/5 rounded-lg"
              />
            </picture>

            <div className="texts pt-5 flex flex-col gap-4 text-xl md:text-2xl lg:text-2xl text-[#04724D]">
              <h1 className="flex gap-3 items-center ">
                <GoPerson></GoPerson>Mohammad Shahriar Hossain
              </h1>
              <h2 className="flex gap-3 items-center ">
                <FaLocationDot></FaLocationDot>Chattogram, Bangladesh
              </h2>
              <h2 className="flex gap-3 items-center">
                <HiOutlineMailOpen></HiOutlineMailOpen>
                shahriarh655@gmail.com
              </h2>
              <h2 className="flex gap-3 items-center">
                <FaPhoneVolume></FaPhoneVolume>+88 01825018400
              </h2>
            </div>
          </div>
          <div className="child-two w-full   md:w-full lg:w-3/6 ">
            {/* contact form start from here */}
            <form className="flex flex-col gap-5">
              <span className="block text-[#04724D]">Your Name *</span>
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                className="input input-bordered border-[#04724D] w-full  bg-white text-[#04724D]"
              />
              {/* email */}
              <span className="block text-[#04724D]">Your Email *</span>
              <input
                type="Your Email"
                placeholder="Your Email"
                name="from_email"
                className="input input-bordered border-[#04724D] w-full  bg-white text-[#04724D]"
              />
              {/* subject */}
              <span className="block text-[#04724D]">Subject *</span>
              <input
                type="text"
                placeholder="Your Subject"
                name="from_subject"
                className="input input-bordered border-[#04724D] w-full  bg-white text-[#04724D]"
              />
              {/* message */}
              <span className="block text-[#04724D]">Message *</span>
              <textarea
                className="textarea textarea-bordered border-[#04724D] textarea-lg w-full  bg-white text-[#04724D]"
                placeholder="Your Message"
                name="message"
              ></textarea>

              <input
                type="submit"
                value="Sent"
                className="btn btn-outline bg-[#04724D] text-[#ecfef4] border-0 font-sans font-semibold hover:bg-[#05845a] w-3/6  mx-auto   mt-2"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
