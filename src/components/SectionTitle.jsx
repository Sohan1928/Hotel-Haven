import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center">
      <p className="text-[#da8e00] font-semibold pb-4 uppercase">{heading}</p>
      <h1 className="text-2xl md:text-4xl">{subHeading}</h1>
    </div>
  );
};

export default SectionTitle;
