import React from "react";
import Navbar from "../components/Navbar.jsx";

const HomePages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full flex-1">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
        <p className="text-lg text-gray-400 mb-8">
          Explore our amazing content and features.
        </p>
      </div>
    </div>
  );
};

export default HomePages;