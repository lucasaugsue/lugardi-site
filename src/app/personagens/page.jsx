"use client";
import Layout from "@/components/Layout";
import { useSearchParams } from "next/navigation";

const PersonagemPage = () => {
  const searchParams = useSearchParams();
  const characterName = searchParams.get("name") || "Personagem Desconhecido";

  return (
    <Layout>
      <div
        className="min-h-screen bg-[#0B070F] text-white p-10 flex justify-center items-center"
        style={{
          backgroundImage: 'url("/diagonal-pattern.png")',
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="w-full max-w-5xl bg-[#2D254A] rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#4E3B6F] py-4 px-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold">{characterName}</h2>
            <div className="bg-[#6E54A3] text-white px-4 py-2 rounded-md uppercase text-sm">
              Characters & Pets
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="flex flex-col md:flex-row">
            {/* Lado esquerdo - Imagem */}
            <div className="md:w-1/2 p-6 flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300x400"
                alt={characterName}
                className="rounded-lg shadow-md mb-4"
              />

              {/* Galeria de Imagens */}
              <div className="p-6 flex space-x-4">
                {[
                  "https://via.placeholder.com/150",
                  "https://via.placeholder.com/150",
                  "https://via.placeholder.com/150",
                  "https://via.placeholder.com/150",
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt="Character thumbnail"
                    className="w-24 h-24 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                  />
                ))}
              </div>

              {/* Descrição */}
              <p className="text-[#C8B8E4] text-justify leading-relaxed">
                Minerva McGonagall was Head of Gryffindor House, a Transfiguration professor
                and Deputy Headteacher of Hogwarts. Strict but fair, McGonagall took no
                nonsense from her students but was not afraid to stand up for them in the face of
                injustice or danger. A talented Animagus, her animal form was a tabby cat, and she
                was fiercely loyal to Albus Dumbledore.
              </p>
            </div>

            {/* Lado direito - Texto com Retângulo */}
            <div className="md:w-1/2 p-6 bg-[#3D3458] rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Appearances</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Harry Potter and the Philosopher's Stone",
                  "Harry Potter and the Chamber of Secrets",
                  "Harry Potter and the Prisoner of Azkaban",
                  "Harry Potter and the Goblet of Fire",
                  "Harry Potter and the Order of the Phoenix",
                  "Harry Potter and the Half-Blood Prince",
                  "Harry Potter and the Deathly Hallows",
                ].map((appearance, index) => (
                  <li key={index} className="text-[#C8B8E4] hover:text-white cursor-pointer">
                    {appearance}
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold">House</h3>
                <p className="text-[#C8B8E4]">Gryffindor</p>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Affiliations</h3>
                <p className="text-[#C8B8E4]">Hogwarts Staff</p>
                <p className="text-[#C8B8E4]">Order of the Phoenix</p>
              </div>

              {/* Skills e Hobbies juntos */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skills</h3>
                  <ul className="space-y-1">
                    <li className="text-[#C8B8E4] hover:text-white cursor-pointer">
                      Transfiguration
                    </li>
                    <li className="text-[#C8B8E4] hover:text-white cursor-pointer">Duelling</li>
                    <li className="text-[#C8B8E4] hover:text-white cursor-pointer">Animagus</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Hobbies</h3>
                  <ul className="space-y-1">
                    <li className="text-[#C8B8E4] hover:text-white cursor-pointer">Quidditch</li>
                    <li className="text-[#C8B8E4] hover:text-white cursor-pointer">
                      Using Pierrotum Locomotor
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonagemPage;
