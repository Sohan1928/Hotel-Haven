import React, { useEffect, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-16">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Customers Say?"}
      ></SectionTitle>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col items-center mx-12 md:mx-28 text-center my-10">
              <img
                className="w-24 h-24 my-3 rounded-full"
                src={review.image}
                alt=""
              />
              <p>{review.description}</p>
              <h3 className="text-2xl font-medium py-2">{review.name}</h3>
              <p className="flex items-center gap-3">
                <p className="flex text-[#da8e00] text-4xl gap-1">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                </p>
                <span className="text-xl">- {review.ratings}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />

              <p className="py-6 text-center">{review.details}</p>
              <h3 className="text-2xl text-amber-600 ">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default Testimonials;
