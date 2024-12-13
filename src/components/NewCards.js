import React from "react";

const NewCards = () => {
  const cardsData = [
    {
      title: "Happy Birthday, Charlie!",
      description: "True or false: Charlie Weasley edition",
      bgColor: "bg-yellow-500",
    },
    {
      title: "Snap Happy",
      description: "Cast a spell on Snapchat with new Harry Potter Bitmoji avatar outfits",
      bgColor: "bg-blue-500",
    },
    {
      title: "Day 9 of 12 Days of Magical Deals",
      description: "Show your house pride with 20% off House fleece hoodies",
      bgColor: "bg-red-500",
    },
    {
      title: "Mistletoe and Merriment",
      description: "Who would be your date to the Slug Club Christmas party?",
      bgColor: "bg-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`relative rounded-lg overflow-hidden text-white ${card.bgColor}`}
          style={{ height: "200px" }}
        >
          <div className="absolute bottom-0 w-full bg-[#00000080] p-4">
            <h3 className="text-sm uppercase font-semibold mb-1 tracking-wide">
              {card.title}
            </h3>
            <p className="text-xs">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewCards;
