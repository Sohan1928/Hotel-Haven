import React from "react";

const Banner = () => {
  return (
    <div className="pt-10 px-2 md:px-10 bg-[url(http://res.cloudinary.com/du0uabbwo/image/upload/v1724703881/se2gaveue9sa70bzeglz.avif)] bg-cover bg-fixed">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-3/5 text-white">
          <h2 className="text-2xl md:text-6xl font-semibold pb-4">
            Haven A Luxury Hotel
          </h2>
          <p className="md:text-lg pb-8">
            Here are the best hotel booking sites, including recommendations for
            international travel and for finding low-priced hotel rooms.
          </p>
          <button className="uppercase border-b-[#da8e00] border-b-4">
            Discover Now
          </button>
        </div>
        <div className="bg-[#c89e50] px-4 md:px-10 py-8 mb-10 ">
          <h1 className="text-xl md:text-3xl font-medium">
            Booking Your Hotel
          </h1>
          <div className="flex flex-col gap-3 pt-4">
            <label>Check In:</label>
            <input
              className="py-2 border border-[#ffc55a] rounded-sm bg-transparent"
              type="text"
              name="calender"
              id=""
            />
            <label>Check Out:</label>
            <input
              className="py-2 border border-[#ffc55a] rounded-sm bg-transparent"
              type="text"
              name="calender"
              id=""
            />
            <label>Guests:</label>
            <input
              className="py-2 border border-[#ffc55a] rounded-sm bg-transparent"
              type="text"
              name="guest"
              id=""
            />
            <label>Room:</label>
            <input
              className="py-2 border border-[#ffc55a] rounded-sm bg-transparent"
              type="text"
              name="room"
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
