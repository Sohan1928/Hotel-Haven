import React from "react";
import { Link } from "react-router-dom";

const NavbarBtn = () => {
  return (
    <div>
      <Link to="/signUp">
        <button className="px-5 py-2 bg-[#da8e00] text-white text-lg font-semibold">
          Sign UP
        </button>
      </Link>
    </div>
  );
};

export default NavbarBtn;
