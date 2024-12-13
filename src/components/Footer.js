import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00001B] text-gray-400 text-sm py-12 p-[5vh]">
      <div className="max-w-8xl mx-auto px-6 border border-gray-500 p-[10vh]">
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center md:text-left">
          <a href="#" className="hover:text-white">Press</a>
          <a href="#" className="hover:text-white">FAQs</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Children's Privacy Policy</a>
          <a href="#" className="hover:text-white">Ad Choices</a>
          <a href="#" className="hover:text-white">Legals</a>
          <a href="#" className="hover:text-white">Privacy & Cookies</a>
          <a href="#" className="hover:text-white">Starting Harry Potter</a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 mx-4"></div>

        {/* Copyright Section */}
        <div className="mt-6 text-center md:text-left">
          <p className="mb-2">© WIZARDING WORLD DIGITAL 2024</p>
          <p className="mb-2">
            Looking for Wizarding World? <a href="https://www.harrypotter.com" className="hover:text-white">HarryPotter.com</a> is the official home of Harry Potter, Fantastic Beasts, and the Wizarding World, formerly known as Pottermore.
          </p>
          <p className="mb-2">
            Brought to you by Wizarding World Digital and its parent company Warner Bros. Entertainment Inc., delivering the latest news and official products from the Wizarding World and our partners.
          </p>
          <p className="mb-2">
            All characters and elements © & TM Warner Bros. Entertainment Inc. Publishing Rights © J.K. Rowling.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <img src="/youtube.svg" alt="YouTube" className="w-6 h-6 cursor-pointer" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src="/tiktok.svg" alt="TikTok" className="w-6 h-6 cursor-pointer" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src="/facebook.svg" alt="Facebook" className="w-6 h-6 cursor-pointer" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src="/instagram.svg" alt="Instagram" className="w-6 h-6 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
