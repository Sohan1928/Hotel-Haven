import React, { useEffect, useState } from "react";
import OtherServicesCart from "./OtherServicesCart";

const OtherService = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("otherServices.json")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("What is error", error));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-4 px-8 gap-4 font-playfair bg-transparent">
        {rooms.map((room) => (
          <OtherServicesCart key={room.id} room={room}></OtherServicesCart>
        ))}
      </div>
    </div>
  );
};

export default OtherService;
