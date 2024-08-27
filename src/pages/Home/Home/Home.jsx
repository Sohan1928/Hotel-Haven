import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AboutHome from "../AboutHome/AboutHome";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";
import OurBlog from "../OurBlog/OurBlog";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hotel_Haven | Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutHome></AboutHome>
      <OurServices></OurServices>
      <Testimonials></Testimonials>
      <OurBlog></OurBlog>
    </div>
  );
};

export default Home;
