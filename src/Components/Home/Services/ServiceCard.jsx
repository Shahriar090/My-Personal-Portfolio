import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ singleService }) => {
  const { id, service, description, serviceImg } = singleService;
  return (
    <div className="card w-full mx-auto bg-white shadow-sm">
      {/* <picture>
        <img
          src={serviceImg}
          alt="Service Image"
          className="w-full h-[320px]"
        />
      </picture> */}
      <div className="card-body p-5 md:p-6 lg:p-8 gap-4">
        <div className="service">
          <h2 className="card-title text-[#ECFEF4] font-serif text-xl md:text-xl lg:text-2xl bg-[#04724D] px-2 rounded-md">
            {service}
          </h2>
        </div>
        <p className="font-sans text-xl text-black">{description}</p>
        <div className="card-actions justify-start ">
          <Link to="/contact">
            {" "}
            <button className="btn btn-outline  bg-[#04724D] text-[#ecfef4] border-0 font-sans font-semibold  hover:bg-[#17986d] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              Contact Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
