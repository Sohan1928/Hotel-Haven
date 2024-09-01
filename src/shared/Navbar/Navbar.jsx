import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import NavbarBtn from "./NavbarBtn";
import ToggleTheme from "./ToggleTheme";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const NavLinks = (
    <nav className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 md:text-base font-medium">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/rooms">Rooms</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/aboutUs">About Us</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-black bg-yellow-50 z-[1] mt-3 w-36 p-2 shadow"
          >
            {NavLinks}
            <div className="mt-3 mb-3">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="px-5 py-2 bg-[#da8e00] text-white text-lg font-semibold"
                >
                  LogOut
                </button>
              ) : (
                <NavbarBtn></NavbarBtn>
              )}
            </div>
          </ul>
        </div>
        <div>
          <Link to="/">
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-nowrap">
              Hotel Haven
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 items-center menu menu-horizontal px-1">
          {NavLinks}
          {user ? (
            <button
              onClick={handleSignOut}
              className="px-5 py-2 bg-[#da8e00] text-white text-lg font-semibold"
            >
              LogOut
            </button>
          ) : (
            <NavbarBtn></NavbarBtn>
          )}
        </ul>
      </div>
      <div className="ml-4">
        <ToggleTheme></ToggleTheme>
      </div>
    </div>
  );
};

export default Navbar;
