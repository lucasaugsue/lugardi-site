import React from "react";

const NewCards = () => {
  const cardsData = [
    {
      title: "Snap Happy",
      description: "Cast a spell on Snapchat with new Harry Potter Bitmoji avatar outfits",
      image: "https://via.placeholder.com/300x150",
    },
    {
      title: "Day 9 of 12 Days of Magical Deals",
      description: "Show your house pride with 20% off House fleece hoodies",
      image: "https://via.placeholder.com/300x150",
    },
    {
      title: "Happy Birthday, Charlie!",
      description: "True or false: Charlie Weasley edition",
      image: "https://via.placeholder.com/300x150",
    },
    {
      title: "Mistletoe and Merriment",
      description: "Who would be your date to the Slug Club Christmas party?",
      image: "https://via.placeholder.com/300x150",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-10">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-[#1E1E2E] rounded-lg overflow-hidden shadow-md relative text-white"
        >
          {/* Imagem no topo */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-40 object-cover"
          />

          {/* Título com fundo redondo */}
          <div className="absolute top-36 left-4 bg-[#2E274B] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">
            {card.title.toUpperCase()}
          </div>

          {/* Texto do card */}
          <div className="p-4 pt-6">
            <p className="text-sm">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewCards;
