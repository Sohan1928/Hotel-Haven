import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ServicesCart from "./ServicesCart";
import OtherService from "./OtherService";

const OurServices = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div className="mb-14 border-t pt-10">
      <SectionTitle
        heading={"What we do"}
        subHeading={"Discover Our Services"}
      ></SectionTitle>

      <div className="grid md:grid-cols-3 items-center text-center mx-8 my-16 gap-10">
        {items.map((item) => (
          <ServicesCart key={item.id} item={item}></ServicesCart>
        ))}
      </div>
      <div>
        <OtherService></OtherService>
      </div>
    </div>
  );
};

export default OurServices;
