"use client";
import React, { useState } from "react";

const menuItems = [
  "News & Features",
  "Quizzes & Puzzles",
  "J.K. Rowling Archive",
  "Discover",
  "Hogwarts Sorting",
  "Portrait Maker",
  "Wizards of Baking",
  "Fact Files",
  "Shop",
];

const NavigationBar = () => {
  return (
    <nav className="bg-gray-900 text-white py-3 hidden lg:block">
      <div className="w-full">
        <div className="h-px bg-[#333349] w-full"></div>
        <ul className="flex justify-center space-x-8 text-lg tracking-wide font-medium w-full py-3">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-gray-400 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const PromotionalMessage = () => {
  return (
    <div className="text-center text-xs text-gray-400 bg-[#0B163B] py-4 w-full mt-0">
      NEW DETAILS FOR THE HARRY POTTER TV SERIES REVEALED!{" "}
      <span className="text-white underline cursor-pointer">READ MORE</span>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center py-4 px-4 bg-gray-900 text-white relative">
        {/* Menu Button for Mobile */}
        <div
          className="lg:hidden flex flex-col justify-center items-center gap-1 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 absolute left-6 hidden lg:inline-flex">
          <img
            src="/youtube.svg"
            alt="YouTube"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="/instagram.svg"
            alt="Instagram"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="/tiktok.svg"
            alt="TikTok"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="/facebook.svg"
            alt="Facebook"
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        {/* Logo */}
        <div className="flex sm:items-center sm:ml-2 md:justify-center md:w-full">
          <img src="/logo.png" alt="Logo" className="h-12 lg:h-20" />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 md:gap-4 md:absolute md:right-6">
          <button className="text-sm px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900 lg:text-base lg:px-6 lg:py-3">
            Login
          </button>
          <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 lg:text-base lg:px-6 lg:py-3">
            Sign Up
          </button>
        </div>
      </header>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 text-white py-3">
          <ul className="space-y-3 text-center text-lg tracking-wide font-medium">
            {menuItems.map((item, index) => (
              <li key={index} className="hover:text-gray-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      <NavigationBar/>
      <PromotionalMessage/>
    </>
  );
};

export default Header;
