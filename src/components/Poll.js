import React from "react";

const Poll = () => {
  return (
    <div className="bg-[#1A1734] border border-[#4A4A66] rounded-lg p-6 text-white max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-lg uppercase text-[#B4B4D4] mb-2">Poll</h2>
        <p className="text-2xl font-semibold">
          What would you get Hagrid for his birthday?
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <button className="bg-transparent border border-[#5758FF] text-[#5758FF] py-2 px-4 rounded-lg hover:bg-[#5758FF] hover:text-white transition duration-300">
          A Dragon
        </button>
        <button className="bg-transparent border border-[#5758FF] text-[#5758FF] py-2 px-4 rounded-lg hover:bg-[#5758FF] hover:text-white transition duration-300">
          A Cookbook
        </button>
        <button className="bg-transparent border border-[#5758FF] text-[#5758FF] py-2 px-4 rounded-lg hover:bg-[#5758FF] hover:text-white transition duration-300">
          A New Suit
        </button>
      </div>
    </div>
  );
};

export default Poll;
