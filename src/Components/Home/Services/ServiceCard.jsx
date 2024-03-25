import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ singleService }) => {
  const { id, service, description, serviceImg } = singleService;
  return (
    <div className="card w-full shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer bg-white">
      <div className="card-body p-3 md:p-6 lg:p-8 gap-4">
        <div className="service">
          <h2 className="card-title text-white text-xl bg-[#04724D] px-2 py-2 rounded-sm uppercase">
            {service}
          </h2>
        </div>
        <p className="text-lg lg:text-xl text-gray-800">{description}</p>
        <div className="card-actions justify-start ">
          <Link to="/contact">
            {" "}
            <button className="btn btn-outline  bg-[#04724D] text-white border-0  font-semibold  hover:bg-[#17986d] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              Contact Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
