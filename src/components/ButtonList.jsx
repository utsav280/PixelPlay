import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import useSelector to track Redux state
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import scroll icons from react-icons
import Button from "./Button";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); // Get the sidebar state from Redux

  const buttons = [
    "All",
    "Live",
    "Upcoming",
    "Gaming",
    "Sports",
    "Music",
    "Movies",
    "Anime",
    "Cricket",
    "Football",
    "Cooking",
    "Valentines",
    "Live",
    "Upcoming",
    "Gaming",
    "Sports",
    "Music",
    "Movies",
    "Anime",
    "Cricket",
    "Football",
    "Cooking",
    "Valentines",
  ];

  const scrollContainerRef = useRef(null); // Ref to the scroll container

  // State to track visibility of the scroll buttons
  const [showScrollButtons, setShowScrollButtons] = useState({
    left: false,
    right: true,
  });

  // Function to scroll the container to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Scroll left by 200px
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Function to scroll the container to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Scroll right by 200px
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Check scroll position to show/hide scroll buttons
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const isAtLeft = container.scrollLeft === 0;

      // Check if the container is at the rightmost position with some tolerance (e.g., 1px)
      const isAtRight =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1;

      setShowScrollButtons({
        left: !isAtLeft, // Hide left button if at the leftmost
        right: !isAtRight, // Hide right button if at the rightmost
      });
    }
  };

  // Attach the scroll event listener on mount and cleanup on unmount
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className={`flex justify-start gap-4 mx-2 pt-5 mt-16 transition-all duration-300 ease-in-out ${
        isMenuOpen ? "ml-64" : "ml-0"
      }`}
    >
      {/* Left Scroll Button (conditionally rendered based on scroll position) */}
      {showScrollButtons.left && (
        <button
          onClick={scrollLeft}
          className="flex items-center justify-center bg-transparent text-white p-2 rounded-full hover:bg-gray-300"
        >
          <FaChevronLeft className="text-black" size={20} />
        </button>
      )}

      {/* Button container with horizontal scrolling and hidden scrollbar */}
      <div
        ref={scrollContainerRef} // Set the ref to the scroll container
        className="flex gap-4 overflow-x-auto max-w-full pb-2"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // Internet Explorer and Edge
        }}
      >
        {buttons.map((button, index) => (
          <Button name={button} key={index} />
        ))}
      </div>

      {/* Right Scroll Button (conditionally rendered based on scroll position) */}
      {showScrollButtons.right && (
        <button
          onClick={scrollRight}
          className="flex items-center justify-center bg-transparent text-white p-2 rounded-full hover:bg-gray-300"
        >
          <FaChevronRight className="text-black" size={20} />
        </button>
      )}
    </div>
  );
};

export default ButtonList;
