import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const Rooms = () => {
  const rooms = useLoaderData();
  const { id } = useParams();
  const room = rooms.find((room) => room.id === parseInt(id));

  const handleBookedRoom = (e) => {
    const click = e.target.value;
    console.log("clicked", click);
  };

  return (
    <div>
      <Helmet>
        <title>Hotel_Haven | Rooms</title>
      </Helmet>
      <div className="mx-auto text-center mt-10 mb-16">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold">
          Room Details
        </h1>
        <div>
          <div className="md:flex gap-8 px-3 py-3 w-full mt-12">
            <div>
              <img className="mx-auto" src={room.img} alt="" />
            </div>
            <div className="md:text-start mt-4 md:mt-0 border p-4 border-[#da8e00] rounded-md shadow-md shadow-[#c9b185] hover:">
              <h1 className="text-2xl font-bold md:text-4xl pb-8">
                {room.title}
              </h1>
              <h4 className="pb-2">
                <span className="text-3xl font-semibold">{room.price}$</span>
                /Pernight
              </h4>
              <div className="flex flex-col gap-2">
                <h3 className="">
                  <span className="font-medium">Size:</span> {room.size}
                </h3>
                <p className="">
                  <span className="font-medium">Capacity:</span> {room.capacity}
                </p>
                <p className="">
                  <span className="font-medium">Bed:</span> {room.bed}
                </p>
                <p className="">
                  <span className="font-medium">Service:</span> {room.service}
                </p>
                <p className="md:w-96">
                  <span className="font-medium">Description:</span>{" "}
                  {room.description}
                </p>
                <button
                  onClick={handleBookedRoom}
                  className="bg-[#da8e00] text-white py-2 mt-1 hover:bg-transparent hover:border hover:border-[#da8e00] transition duration-500 mx-4 hover:text-[#da8e00] rounded-full font-semibold"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
