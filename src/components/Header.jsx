/* eslint-disable react-hooks/exhaustive-deps */
import {
  FaBars,
  FaUser,
  FaSearch,
  FaVideo,
  FaTh,
  FaBell,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery === "") return;
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else searchQuerySuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // debounce the API call
  // make an API call on each key stroke
  // but if the time gap b/w each key troke is <200ms, decline the API call
  const searchQuerySuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHnadler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 w-full h-16 flex items-center justify-between p-2 bg-white shadow-md">
      {/* Left Section - Hamburger Menu & Logo */}
      <div className="flex items-center">
        <button
          onClick={() => toggleMenuHnadler()}
          className="p-2 text-black hover:bg-gray-200 rounded-full"
        >
          <FaBars size={20} />
        </button>
        {/* YouTube Logo */}

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="YouTube"
          className="h-8 ml-4"
        />
      </div>

      {/* Center Section - Search Bar */}
      <div className="flex items-center flex-grow mx-4 max-w-xl relative">
        <div className="relative w-full flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-blue-500 pl-4 h-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="h-10 px-5 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 flex items-center justify-center">
            <FaSearch size={18} className="text-gray-600" />
          </button>
        </div>

        {/* YouTube-styled Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="flex items-center p-3 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <FaSearch size={14} className="text-gray-500 mr-4" />
                  <span className="text-md font-semibold text-black">
                    {suggestion}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center space-x-4">
        <button className="p-2 text-black hover:bg-gray-200 rounded-full">
          <FaVideo size={20} />
        </button>
        <button className="p-2 text-black hover:bg-gray-200 rounded-full">
          <FaTh size={20} />
        </button>
        <button className="p-2 text-black hover:bg-gray-200 rounded-full">
          <FaBell size={20} />
        </button>
        <button className="p-2 text-black hover:bg-gray-200 rounded-full">
          <FaUser size={20} />
        </button>
      </div>
    </div>
  );
}

export default Header;
