import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-[#da8e00] font-bold text-white px-4 py-2 rounded"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
