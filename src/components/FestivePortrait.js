import React from "react";

const FestivePortrait = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-gradient-to-t from-black to-[#1A1734] p-8 md:p-12 lg:p-20 min-h-[60vh]">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg w-full">
        {/* Lado esquerdo - Imagem */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="w-[350px] lg:w-[400px] h-[225px] lg:h-[300px] border-[2px] border-transparent rounded-[50%] overflow-hidden shadow-[0px_0px_20px_10px_rgba(87,88,255,0.3)]">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Festive Portraits"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Lado direito - Texto e Botão */}
        <div className="w-full md:w-1/2 text-white mt-8 md:mt-0 text-center md:text-left flex flex-col justify-center items-center md:items-start px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            GIVE YOUR PORTRAIT A FESTIVE MAKEOVER
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Christmas has arrived in the Portrait Maker! From yuletide backgrounds
            and new knitwear to crackers and socks from Dobby, there are a whole
            new set of items to get you into the festive spirit. Mince pie,
            anyone?
          </p>
          <button className="bg-[#0B070F] hover:bg-white text-white hover:text-black border-[2px] py-2 px-8 rounded-full transition duration-300 shadow-lg">
            DECK THE PORTRAITS
          </button>
        </div>
      </div>
    </div>
  );
};

export default FestivePortrait;
