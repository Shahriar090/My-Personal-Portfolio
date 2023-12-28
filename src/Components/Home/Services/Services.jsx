import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";
import sectionImg from "../../../../src/assets/Services/my-services.avif";
import sectionImg2 from "../../../../src/assets/Services/man-thinking-concept-illustration_114360-7920.avif";

const Services = () => {
  // state
  const [services, setServices] = useState([]);
  //   use effect
  useEffect(() => {
    fetch("/public/data/servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-slate-50 px-4 md:px-6 lg:px-10 py-4 md:py-6 lg:py-10">
      <div className="flex flex-col md:flex-row items-center lg:flex-row py-10">
        <div className="sec-img w-full lg:w-2/5">
          <picture>
            <img src={sectionImg} alt="" className="rounded-full" />
          </picture>
        </div>

        <div className="w-full lg:w-3/5">
          <SectionTitle
            heading={"What I Do?"}
            subHeading={"My Services"}
          ></SectionTitle>
        </div>
      </div>

      <section>
        {/* mapping single data */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-0">
          {services.map((singleService) => (
            <ServiceCard
              key={singleService.id}
              singleService={singleService}
            ></ServiceCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
