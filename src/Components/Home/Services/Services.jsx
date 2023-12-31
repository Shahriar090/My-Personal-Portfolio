import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";
import sectionImg from "../../../../src/assets/Services/my-services.avif";
import sectionImg2 from "../../../../src/assets/Services/hand-coding.avif";

const Services = () => {
  // state
  const [services, setServices] = useState([]);
  //   use effect
  useEffect(() => {
    fetch("serviceData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);
  return (
    <div className="bg-slate-50 px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-10">
      {/* section title and vector image */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center lg:flex-row">
        <div className="sec-img w-full md:w-2/4 lg:w-2/5">
          <picture>
            <img src={sectionImg2} alt="" className="rounded-full" />
          </picture>
        </div>

        <div className="w-full lg:w-3/5">
          <SectionTitle
            heading={"What I Do?"}
            subHeading={"My Services"}
          ></SectionTitle>
        </div>
      </div>
      {/* main section */}
      <section>
        {/* mapping single data */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 md:pt-8 lg:pt-10">
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
