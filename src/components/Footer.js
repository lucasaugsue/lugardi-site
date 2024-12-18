import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-500 bg-[#00001B] text-gray-400 text-sm py-16">
      <div className="max-w-7xl mx-auto p-12 border border-gray-500 overflow-hidden shadow-[0px_0px_20px_2px_rgba(87,88,255,0.3)]">
        {/* Links and Logo Container */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-10 py-4">
          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center md:text-left text-base">
            <a href="#" className="hover:text-white">Press</a>
            <a href="#" className="hover:text-white">FAQs</a>
            <a href="#" className="hover:text-white">Children's Privacy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Ad Choices</a>
            <a href="#" className="hover:text-white">Legals</a>
            <a href="#" className="hover:text-white">Privacy & Cookies</a>
            <a href="#" className="hover:text-white">Starting Harry Potter</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-10">
            <a href="#" className="hover:text-white">
              <img
                src="/youtube.svg"
                alt="YouTube"
                className="w-6 h-6 cursor-pointer"
              />
            </a>
            <a href="#" className="hover:text-white">
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="w-6 h-6 cursor-pointer"
              />
            </a>
            <a href="#" className="hover:text-white">
              <img
                src="/tiktok.svg"
                alt="TikTok"
                className="w-6 h-6 cursor-pointer"
              />
            </a>
            <a href="#" className="hover:text-white">
              <img
                src="/facebook.svg"
                alt="Facebook"
                className="w-6 h-6 cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-500 my-6" />

        {/* Copyright and Social Media Container */}
        <div className="flex flex-col px-2 md:flex-row justify-center items-center text-center md:text-center text-sm leading-relaxed">
          {/* Copyright Section */}
          <div className="w-full">
            <p>© WIZARDING WORLD DIGITAL 2024</p>
            <p className="mt-2">
              Looking for Wizarding World?{" "}
              <a
                href="https://www.harrypotter.com"
                className="hover:text-white underline"
              >
                HarryPotter.com
              </a>{" "}
              is the official home of Harry Potter, Fantastic Beasts, and the
              Wizarding World.
            </p>
            <p className="mt-2">
              Brought to you by Wizarding World Digital and its parent company
              Warner Bros. Entertainment Inc., delivering the latest news and
              official products from the Wizarding World.
            </p>
            <p className="mt-2">
              All characters and elements © & TM Warner Bros. Entertainment Inc.
              Publishing Rights © J.K. Rowling.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
