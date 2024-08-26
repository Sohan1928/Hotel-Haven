import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AboutHome from "../AboutHome/AboutHome";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hotel_Haven | Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutHome></AboutHome>
    </div>
  );
};

export default Home;
