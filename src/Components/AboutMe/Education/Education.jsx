import React from "react";
import eduImg from "../../../assets/Skills-&-Edu/reading-book.avif";
const Education = () => {
  return (
    <div className="education flex flex-col-reverse md:flex-row lg:flex-row items-center gap-5">
      <div className="edu-details w-full md:w-3/5 lg:w-3/5 bg-gradient-to-l from-transparent to-[#ECFEF4] p-5 rounded-lg">
        <div className="ssc text-[#04724D]">
          <h2 className="text-lg md:text-xl lg:text-2xl  font-bold">S.S.C</h2>
          <h3 className=" text-lg">Year : 2017</h3>
          <p className=" text-lg">Institution : Barkar S. Z. High School</p>
        </div>
        <div className="HSC text-[#04724D]">
          <h2 className="text-lg md:text-xl lg:text-2xl  font-bold">H.S.C</h2>
          <h3 className=" text-lg">Year : 2019</h3>
          <p className=" text-lg">
            Institution : Ispahani Public School & College, Chattogram
          </p>
        </div>
        <div className="Honours text-[#04724D]">
          <h2 className="text-lg md:text-xl lg:text-2xl  font-bold">
            Degree : Bachelor Of Social Science
          </h2>
          <h3 className=" text-lg">Start : 2019</h3>
          <h3 className=" text-lg">End : Will Be Added</h3>
          <p className=" text-lg">
            Institution : National University Of Bangladesh
          </p>
        </div>
      </div>
      <div className="edu-img  w-full md:w-3/5 lg:w-3/5">
        <picture>
          <img
            src={eduImg}
            alt=""
            className="rounded-full w-full lg:w-3/5 mx-auto"
          />
        </picture>
      </div>
    </div>
  );
};

export default Education;
