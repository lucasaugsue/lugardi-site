import React from "react";
import Poll from "./Poll";
import NewCards from "./NewCards";

const NewsAndPoll = () => {
  return (
    <div className="bg-[#1A1734] p-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-10">
        <NewCards />
        <Poll />
      </div>
    </div>
  );
};

export default NewsAndPoll;
