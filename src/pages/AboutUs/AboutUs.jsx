import React from "react";
import { Helmet } from "react-helmet-async";
import { IoCheckmark } from "react-icons/io5";
import img1 from "../../assets/about_img1.webp";
import img2 from "../../assets/about_img2.webp";
import img3 from "../../assets/about_img3.webp";
import img4 from "../../assets/about_img4.png";

const AboutUs = () => {
  return (
    <div className="mb-10">
      <Helmet>
        <title>Hotel_Haven | About Us</title>
      </Helmet>
      <div>
        <div>
          <h1 className="font-playfair text-3xl md:text-5xl mx-auto font-semibold text-center mt-6 mb-10">
            About US
          </h1>
        </div>
        <div className="md:flex items-center justify-around mx-8">
          <div className="">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              Welcome To Haven
            </h1>
            <p className="md:w-96 opacity-80">
              Built in 2010 during the Belle Epoque period, this hotel is
              located in the center of Paris, with easy access to the city’s
              tourist attractions. It offers tastefully decorated rooms.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col gap-2 justify-center">
            <h4 className="flex items-center gap-2">
              <span className="text-[#da8e00] text-lg">
                <IoCheckmark></IoCheckmark>
              </span>
              20% Off On Accommodation.
            </h4>
            <h4 className="flex items-center gap-2">
              <span className="text-[#da8e00] text-lg">
                <IoCheckmark></IoCheckmark>
              </span>
              Complimentary Daily Breakfast.
            </h4>
            <h4 className="flex items-center gap-2">
              <span className="text-[#da8e00] text-lg">
                <IoCheckmark></IoCheckmark>
              </span>
              3 Pcs Laundry Per Day.
            </h4>
            <h4 className="flex items-center gap-2">
              <span className="text-[#da8e00] text-lg">
                <IoCheckmark></IoCheckmark>
              </span>
              Free Wifi.
            </h4>
            <h4 className="flex items-center gap-2">
              <span className="text-[#da8e00] text-lg">
                <IoCheckmark></IoCheckmark>
              </span>
              Discount 20% On F&B.
            </h4>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6 items-center mx-6">
          <div>
            <img className="w-96 h-96 rounded-lg mx-auto" src={img3} alt="" />
            <h2 className="absolute -translate-y-12 translate-x-16 md:translate-x-56 text-white text-xl font-semibold ">
              Dinner Time
            </h2>
          </div>
          <div>
            <img className="w-96 h-96 rounded-lg mx-auto" src={img1} alt="" />
            <h2 className="absolute -translate-y-12 translate-x-10 md:translate-x-48 text-white text-xl font-semibold ">
              Travel & Camping
            </h2>
          </div>
          <div>
            <img className="w-96 h-96 rounded-lg mx-auto" src={img2} alt="" />
            <h2 className="absolute -translate-y-12 translate-x-8 md:translate-x-44 text-white text-xl font-semibold ">
              Restaurants Services
            </h2>
          </div>
          <div>
            <img className="w-96 h-96 rounded-lg mx-auto" src={img4} alt="" />
            <h2 className="absolute -translate-y-12 translate-x-16 md:translate-x-52 text-white text-xl font-semibold ">
              Photo Session
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
