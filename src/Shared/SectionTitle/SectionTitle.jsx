import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="py-8 md:py-12 lg:py-16 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-black">
        {heading}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl font-semibold font-sans text-[#05845a]">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
