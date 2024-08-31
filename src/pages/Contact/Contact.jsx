import React from "react";
import { Helmet } from "react-helmet-async";
import ContactMap from "./ContactMap";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const postContent = event.target.postContent.value;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your form submitted",
    });
    console.log(name, email, postContent);
  };

  return (
    <div className="my-10 mx-4 md:mx-10">
      <Helmet>
        <title>Hotel_Haven | Contact</title>
      </Helmet>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="">
          <h1 className="font-playfair text-center md:text-start text-3xl md:text-5xl mx-auto font-semibold mb-10">
            Contact Info
          </h1>
          <div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              dolor vero ad explicabo perferendis consequatur.
            </p>
            <h4>Address: 856 Cordia Extension Apt. 356, Lake, US</h4>
            <h4>Phone: (12) 345 67890</h4>
            <h4>Email: info.test@gmail.com</h4>
            <p>Fax: (12) 345 67890</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="md:flex gap-3">
              <input
                className="px-2 py-3 border mb-4 md:mb-0 w-full md:w-1/2 text-black"
                type="text"
                name="name"
                id=""
                placeholder="Name"
              />
              <input
                className="px-2 py-3 border mb-4 md:mb-0 w-full md:w-1/2 text-black"
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />
            </div>
            <div className="mt-6">
              <textarea
                name="postContent"
                rows={8}
                cols={64}
                className="border py-2 px-3 w-full text-black"
                placeholder="Your Message"
              ></textarea>
            </div>
            <input
              className="px-5 py-2 bg-[#da8e00] text-white text-lg cursor-pointer hover:bg-transparent hover:text-black hover:border hover:border-[#da8e00] transition duration-0 hover:duration-300 font-semibold mt-2"
              type="submit"
              value="Submit Now"
            />
          </div>
        </form>
      </div>
      <div className="mt-8">
        <ContactMap></ContactMap>
      </div>
    </div>
  );
};

export default Contact;
