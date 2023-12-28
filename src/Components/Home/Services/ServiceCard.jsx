import React from "react";

const ServiceCard = ({ singleService }) => {
  const { id, service, description, serviceImg } = singleService;
  return (
    <div className="card w-full bg-slate-50 mx-auto shadow-lg">
      {/* <figure>
        <img src={serviceImg} alt="Service Image" className="" />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title text-[#05845a] font-serif">{service}</h2>
        <p className="font-sans">{description}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-outline rounded-full bg-[#ecfef4] text-[#05845a] border-0 font-sans font-semibold  hover:bg-[#05845a]">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
