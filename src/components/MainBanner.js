import React from "react";

const MainBanner = () => {
  return (
    <div className="bg-[#2E274B] flex flex-col items-center justify-center text-white px-6 py-10">
        <h1 className="text-5xl lg:text-6xl font-bold uppercase tracking-wide mb-6 leading-tight max-w-3xl text-center">
            Watch Episode Three of Hogwarts Hangout: A Wizarding Christmas
        </h1>
        <p className="text-lg lg:text-md mb-8 text-center max-w-lg">
            It’s time for a brand-new episode of our web series Hogwarts Hangout, featuring our very own editorial team! ’Tis the season for all things Christmas – including this festive Harry Potter chat.
        </p>
        <button className="bg-[#5758FF] text-white py-2 px-12 rounded-full text-lg font-semibold hover:bg-[#4546d4] transition duration-300">
            Watch
        </button>
    </div>
  );
};

export default MainBanner;
