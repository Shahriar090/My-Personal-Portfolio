import React from "react";
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ singleService }) => {
  const { id, service, description, serviceImg } = singleService;
  return (
    <div className="card w-full bg-slate-50 mx-auto shadow-lg transform transition-transform hover:scale-105 ">
      {/* <picture>
        <img src={serviceImg} alt="Service Image" className="" />
      </picture> */}
      <div className="card-body gap-4">
        <div className="service">
          <h2 className="card-title text-[#ECFEF4] font-serif text-xl md:text-xl lg:text-2xl bg-[#04724D] px-2  rounded-lg">
            {service}
          </h2>
        </div>
        <p className="font-sans text-xl text-black">{description}</p>
        <div className="card-actions justify-start ">
          <button className="btn btn-outline rounded-full bg-[#05845a] text-[#ecfef4] border-0 font-sans font-semibold  hover:bg-[#17986d] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
