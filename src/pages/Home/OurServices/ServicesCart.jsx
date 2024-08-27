import React from "react";

const ServicesCart = ({ item }) => {
  const { img, title, description } = item;
  return (
    <div className="">
      <div className="hover:bg-[rgb(231,173,96)] hover:text-white transition duration-0 hover:duration-300 px-6 py-10">
        <img className="h-16 flex mx-auto" src={img} />
        <h2 className="font-playfair text-3xl font-semibold py-4">{title}</h2>
        <p className="opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCart;
