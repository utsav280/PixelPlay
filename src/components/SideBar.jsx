import React from "react";
import {
  FaHome,
  FaFire,
  FaVideo,
  FaMusic,
  FaGamepad,
  FaFilm,
  FaListAlt,
} from "react-icons/fa"; // You can import icons like this

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`fixed top-0 left-0 p-5 shadow-lg bg-gray-800 text-white h-screen mt-16 transition-all duration-300 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ width: "240px" }} // Adjust width to your desired sidebar width
    >
      {/* Logo */}
      <div className="mb-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="YouTube"
          className="h-8"
        />
      </div>

      {/* Navigation Links */}
      <ul className="space-y-4">
        <Link to="/">
          <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <FaHome size={24} />
            <span>Home</span>
          </li>
        </Link>

        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaFire size={24} />
          <span>Trending</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaVideo size={24} />
          <span>Subscriptions</span>
        </li>

        <h2 className="font-bold text-lg text-gray-400 mt-6">Explore</h2>

        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaMusic size={24} />
          <span>Music</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaGamepad size={24} />
          <span>Gaming</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaFilm size={24} />
          <span>Movies</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaListAlt size={24} />
          <span>More</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
