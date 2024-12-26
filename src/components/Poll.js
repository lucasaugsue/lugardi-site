"use client";
import React, { useState } from "react";

const Poll = () => {
  // Estado inicial com as opções e suas porcentagens
  const [options, setOptions] = useState([
    { id: 1, text: "A Dragon", percentage: 27, selected: false },
    { id: 2, text: "A Cookbook", percentage: 19, selected: false },
    { id: 3, text: "A New Suit", percentage: 22, selected: false },
    { id: 4, text: "A Spell", percentage: 32, selected: false },
  ]);

  const [isVoted, setIsVoted] = useState(false);

  // Função para lidar com o clique no botão
  const handleVote = (id) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, selected: true } : { ...option, selected: false }
    );
    setOptions(updatedOptions);
    setIsVoted(true);
  };

  return (
    <div className="bg-[#1A1734] border border-[#4A4A66] rounded-lg">
      <div className="p-6 max-w-md">
        <div className="text-center mb-4">
          <h2 className="text-lg uppercase text-[#B4B4D4] mb-2">Poll</h2>
          <p className="text-2xl font-semibold">
            What would you get Hagrid for his birthday?
          </p>
        </div>
        <div className={`flex flex-col gap-${isVoted ? 6 : 1}`}>
          {/* Renderiza as opções com barra de progresso após o voto */}
          {options.map((option) => (
            <div key={option.id} className={`place-items-end ${isVoted ? "p-2" : "p-3"}`}>
              {isVoted ? (
                // Renderiza a barra de progresso com o nome da opção
                <>
                  <div className="flex-1">
                    <div className="grid grid-cols-3 justify-items-stretch ">
                      <span
                        className={`text-lg font-semibold mb-1 ${
                          option.selected ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {option.text}
                      </span>
                      <div/>
                      <span
                        className={`justify-self-end text-md font-semibold ${
                          option.selected ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {option.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-5 relative">
                      <div
                        className={`h-5 rounded-full ${
                          option.selected ? "bg-[#FFFFFF]" : "bg-[#5758FF]"
                        }`}
                        style={{ width: `${option.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </>
              ) : (
                // Renderiza os botões para votar
                <button
                  onClick={() => handleVote(option.id)}
                  className="bg-transparent border border-[#5758FF] text-[#5758FF] py-2 px-4 w-full rounded-lg hover:bg-[#5758FF] hover:text-white transition duration-300"
                >
                  {option.text}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Poll;
