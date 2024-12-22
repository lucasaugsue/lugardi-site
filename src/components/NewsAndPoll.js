import React from "react";
import Poll from "./Poll";
import NewCards from "./NewCards";

const NewsAndPoll = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 bg-[#1A1734] text-white gap-12 lg:gap-10 py-6 lg:py-10 px-10 lg:px-20">
      <div className="flex-1">
        <NewCards />
      </div>
      <div className="flex-1 max-w-md mx-auto">
        <Poll />
      </div>
    </div>
  );
};

export default NewsAndPoll;
