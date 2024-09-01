import React from "react";
import img1 from "../../../assets/about_img1.webp";
import img2 from "../../../assets/about_img2.webp";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <div className="my-20 px-4 mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col md:w-[600px] text-center"
        >
          <h4 className="text-[#da8e00] uppercase pb-6">About Us</h4>
          <h1 className="text-3xl md:text-5xl pb-4 md:leading-[3.5rem]">
            Intercontinental LA Westlake Hotel
          </h1>
          <p className="md:leading-[1.8rem]">
            Hotel_Haven.com is a leading online accommodation site. We’re
            passionate about travel. Every day, we inspire and reach millions of
            travelers across 90 local websites in 41 languages. So when it comes
            to booking the perfect hotel, vacation rental, resort, apartment,
            guest house, or tree house, we’ve got you covered.
          </p>
          <div className="justify-center flex">
            <Link to="/aboutUs">
              <button className="pt-8 items-center text-center justify-center flex uppercase border-b-[#da8e00] border-b-4">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col md:flex-row gap-6"
        >
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
