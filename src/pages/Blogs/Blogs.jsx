import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  return (
    <div>
      <Helmet>
        <title>Hotel_Haven | Blogs Details</title>
      </Helmet>
      <div className="mt-6 mb-12 flex flex-col items-center">
        <h1 className="font-playfair text-4xl mb-3 md:text-5xl font-bold">
          Blogs Details
        </h1>
        <img className="mb-2 px-4 md:px-0" src={blog.img} alt="" />
        <h2 className="text-2xl font-bold">{blog.place}</h2>
        <p className="text-2xl font-semibold">{blog.type}</p>
        <p className="text-sm">{blog.date}</p>
      </div>
    </div>
  );
};

export default Blogs;
