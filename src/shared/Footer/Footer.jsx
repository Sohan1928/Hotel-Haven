import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Footer = () => {
  const [text] = useTypewriter({
    words: ["A Luxury Hotel", "A Deluxe Hotel", "A Suitable Hotel"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 70,
    delaySpeed: 2000,
  });
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-nowrap">
            Hotel Haven <br />
            <span className=" bg-[#da8e00] bg-clip-text text-transparent">
              {text}
            </span>
            <Cursor
              cursorBlinking="true"
              cursorStyle="_"
              cursorColor="#da8e00"
            ></Cursor>
          </h1>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <aside className="footer footer-center bg-base-200 pb-8 text-base-content">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Hotel_Haven
        </p>
      </aside>
    </div>
  );
};

export default Footer;
