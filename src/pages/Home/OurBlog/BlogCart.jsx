import React from "react";

const BlogCart = ({ blog }) => {
  const { img, place, date, type } = blog;

  const cardStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
  };

  return (
    <div style={cardStyle} className="h-64">
      <div>
        <h4 className="bg-[#da8e00] w-28 px-2 py-1 text-center rounded-b-full rounded-r-full">
          {type}
        </h4>
        <h3 className="text-4xl font-playfair py-2">{place}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default BlogCart;
