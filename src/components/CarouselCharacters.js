"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Importa a função de navegação
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const characters = [
  { name: "Nearly Headless Nick", image: "https://via.placeholder.com/300x400" },
  { name: "Moaning Myrtle", image: "https://via.placeholder.com/300x400" },
  { name: "Minerva McGonagall", image: "https://via.placeholder.com/300x400" },
  { name: "Death Eaters", image: "https://via.placeholder.com/300x400" },
  { name: "Albus Dumbledore", image: "https://via.placeholder.com/300x400" },
];

const CarouselCharacters = () => {
  const router = useRouter();

  const handleCardClick = (characterName) => {
    router.push(`/personagens?name=${characterName}`); // Redireciona com parâmetro de nome
  };

  return (
    <div className="w-full py-20 bg-gradient-to-t from-[#1A1734] to-black px-20">
      <h2 className="text-center text-white text-4xl font-semibold mb-8">
        MONTHLY MAGICAL PICKS
      </h2>
      <Swiper
        spaceBetween={60}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {characters.map((character, index) => (
          <SwiperSlide key={index}>
            <div
              className="rounded-lg overflow-hidden shadow-lg border-2 border-black bg-gradient-to-b from-[#53387E] to-[#2C1A4C] text-white cursor-pointer"
              onClick={() => handleCardClick(character.name)}
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{character.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCharacters;
