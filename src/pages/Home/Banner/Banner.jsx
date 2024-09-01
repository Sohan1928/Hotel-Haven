import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["A Luxury Hotel", "A Deluxe Hotel", "A Suitable Hotel"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 70,
    delaySpeed: 2000,
  });
  const handleCheck = (e) => {
    e.preventDefault();
    const form = e.target;

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Room available now",
    });
  };

  return (
    <div className="pt-10 px-2 md:px-10 bg-[url(http://res.cloudinary.com/du0uabbwo/image/upload/v1724703881/se2gaveue9sa70bzeglz.avif)] bg-cover bg-fixed">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-3/5 text-white">
          <h2 className="text-2xl md:text-6xl font-semibold pb-4">
            Haven{" "}
            <span className=" bg-[#da8e00] bg-clip-text text-transparent">
              {text}
            </span>
            <Cursor
              cursorBlinking="true"
              cursorStyle="_"
              cursorColor="#da8e00"
            ></Cursor>
          </h2>
          <p className="md:text-lg pb-8">
            Here are the best hotel booking sites, including recommendations for
            international travel and for finding low-priced hotel rooms.
          </p>
          <button className="uppercase border-b-[#da8e00] border-b-4">
            Discover Now
          </button>
        </div>
        <div className="bg-[#dfc087] px-4 md:px-10 py-8 mb-10 ">
          <h1 className="text-xl md:text-3xl font-medium">
            Booking Your Hotel
          </h1>
          <form onSubmit={handleCheck} className="flex flex-col gap-3 pt-4">
            <label>Check In:</label>
            <input
              className="py-2 px-2 border border-[#ffc55a] rounded-sm bg-transparent"
              type="date"
              name="date"
              id="checkIn"
              required
            />
            <label>Check Out:</label>
            <input
              className="py-2 px-2 border border-[#ffc55a] rounded-sm bg-transparent"
              type="date"
              name="date"
              id="checkOut"
              required
            />
            <label>Guests:</label>
            <input
              className="py-2 px-2 border border-[#ffc55a] rounded-sm bg-transparent"
              type="text"
              name="guest"
              id="3"
              required
            />
            <label>Room:</label>
            <input
              className="py-2 px-2 border border-[#ffc55a] rounded-sm bg-transparent"
              type="text"
              name="room"
              id="4"
              required
            />
            <div className="flex mx-auto text-center mt-2 w-full">
              <button className="bg-[#da8e00] text-white py-2 w-full mt-1 hover:bg-transparent hover:border hover:border-[#fcffff] transition duration-500 mx-4 font-semibold">
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
