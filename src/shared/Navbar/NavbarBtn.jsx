import React from "react";
import { Link } from "react-router-dom";

const NavbarBtn = () => {
  return (
    <div>
      <Link to="/login">
        <button className="px-5 py-2 bg-[#da8e00] text-white text-lg font-semibold">
          Login
        </button>
      </Link>
    </div>
  );
};

export default NavbarBtn;
