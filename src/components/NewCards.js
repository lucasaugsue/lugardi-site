"use client"
import React, {useState, useEffect} from "react";
import { serverRequest } from "@/utils/serverRequest";

const NewCards = () => {
  const [cardsData, setCardsData] = useState([]);

  const getPostagens = async () => {
    try {
      const data = await serverRequest({ url: "/postagem", method: "GET" });
      console.log("Dados recebidos:", data);
      setCardsData(data)

    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  useEffect(() => {
    getPostagens(); 
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-10">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-[#1E1E2E] rounded-lg overflow-hidden shadow-md relative text-white"
        >
          {/* Imagem com estilo padronizado */}
          <div className="relative w-full h-40 overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Título com fundo redondo */}
          <div className="absolute top-32 left-4 bg-[#2E274B] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">
            {card.title.toUpperCase()}
          </div>

          {/* Texto do card */}
          <div className="p-4 pt-6">
            <p className="text-sm">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>

  );
};

export default NewCards;
