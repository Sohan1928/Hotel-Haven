import React from "react";
import { Link } from "react-router-dom";

const OtherServicesCart = ({ room }) => {
  const { id, title, img, price, size, capacity, bed, service, btn } = room;

  const cardStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
  };

  return (
    <div style={cardStyle}>
      <div className="bg-white/70 px-3 py-3 w-full items-center">
        <h1 className="text-4xl">{title}</h1>
        <h4 className="">
          <span className="text-4xl font-semibold">{price}$</span>/Pernight
        </h4>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">Size: {size}</h3>
          <p className="text-xl">Capacity: {capacity}</p>
          <p className="text-xl">Bed: {bed}</p>
          <p className="text-xl">Service: {service}</p>
          <Link to={`/rooms/${id}`} className="text-center">
            <button className="text-xl uppercase border-b-[#da8e00] border-b-4 mx-auto font-bold">
              {btn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherServicesCart;
