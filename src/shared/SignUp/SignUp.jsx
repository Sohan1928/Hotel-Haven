import React, { useContext } from "react";
import loginImg from "../../assets/loginImg.avif";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("user created successfully", name, userName, email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Register Successfully",
        });
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="my-10 mx-8 md:flex items-center">
      <Helmet>
        <title>Hotel_Haven | SignUp</title>
      </Helmet>
      <div>
        <img src={loginImg} alt="" />
      </div>

      <form onSubmit={handleSignUp} className="md:w-1/2">
        <div className="flex flex-col gap-2 md:gap-6 py-4 md:ml-10  items-center bg-slate-300 shadow-lg p-4 pt-8 md:pt-20">
          <h2 className="text-2xl font-bold text-center text-black">
            Register for an account
          </h2>
          <input
            className="px-2 py-3 border mb-4 md:mb-0 w-full text-black"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            className="px-2 py-3 border mb-4 md:mb-0 w-full text-black"
            type="text"
            name="userName"
            id="userName"
            placeholder="User Name"
            required
          />
          <input
            className="px-2 py-3 border mb-4 md:mb-0 w-full text-black"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            className="px-2 py-3 border mb-4 md:mb-0 w-full text-black"
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <input
            className="px-5 py-2 bg-[#da8e00] text-white text-lg cursor-pointer hover:bg-transparent hover:text-black hover:border hover:border-[#da8e00] transition duration-0 hover:duration-300 font-semibold mt-2"
            type="submit"
            value="SignUp"
          />
          <div>
            <h2 className="text-center text-black">
              Already have an account?
              <Link to="/login" className="underline font-semibold">
                {" "}
                Please Login
              </Link>
            </h2>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
