import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import BlogCart from "./BlogCart";

const OurBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="mt-8 mb-16">
      <SectionTitle
        heading={"hotel news"}
        subHeading={"Our Blog & Event"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 mx-8 gap-6 text-white mt-12">
        {blogs.map((blog) => (
          <BlogCart key={blog.id} blog={blog}></BlogCart>
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
