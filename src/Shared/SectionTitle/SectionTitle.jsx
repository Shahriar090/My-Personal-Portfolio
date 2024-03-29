import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="py-8 md:py-12 lg:py-16 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-black uppercase">
        {heading}
      </h1>
      <p className="text-lg sm:text-xl font-semibold text-gray-800">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
