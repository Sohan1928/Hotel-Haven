import React from "react";
import loginImg from "../../assets/loginImg.avif";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log("login user", name, email);
  };

  return (
    <div className="my-10 mx-8 md:flex items-center">
      <Helmet>
        <title>Hotel_Haven | Login</title>
      </Helmet>
      <div>
        <img src={loginImg} alt="" />
      </div>

      <form onSubmit={handleLogin} className="md:w-1/2">
        <div className="flex flex-col gap-2 md:gap-6 py-4 md:ml-10  items-center bg-slate-300 shadow-lg p-4 pt-8 md:pt-20">
          <h2 className="text-2xl font-bold text-center text-black">
            Please Login
          </h2>
          <input
            className="px-2 py-3 border mb-4 md:mb-0 w-full text-black"
            type="text"
            name="name"
            id=""
            placeholder="Name"
            required
          />
          <input
            className="px-2 py-3 border mb-4 md:mb-0 w-full text-black"
            type="email"
            name="email"
            id=""
            placeholder="Email"
            required
          />
          <input
            className="px-5 py-2 bg-[#da8e00] text-white text-lg cursor-pointer hover:bg-transparent hover:text-black hover:border hover:border-[#da8e00] transition duration-0 hover:duration-300 font-semibold mt-2"
            type="submit"
            value="Login"
          />
          <div>
            <h2 className="text-center text-black">
              New here?
              <Link to="/signUp" className="underline font-semibold">
                {" "}
                Please Register
              </Link>
            </h2>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
