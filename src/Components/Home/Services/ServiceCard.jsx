import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
const ServiceCard = ({ singleService }) => {
  const { id, service, description, serviceImg } = singleService;
  return (
    <div className="card w-full shadow-xl  transition-all duration-500 cursor-pointer bg-white">
      <div className="card-body p-5  lg:p-8 gap-5">
        <div className="service">
          <h2 className="card-title text-white text-xl bg-[#04724D] px-2 py-2 rounded-sm uppercase">
            {service}
          </h2>
        </div>
        <p className="text-lg lg:text-xl text-gray-800">{description}</p>
        <div className="card-actions">
          <Link to="/contact">
            {" "}
            <Button>Contact Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
