"use client";
import React, { Suspense } from "react";
import Layout from "@/components/Layout";
import { useSearchParams } from "next/navigation";
import { serverRequest } from "@/utils/serverRequest";

// Função para carregar dados
const fetchCharacterData = async (characterTag) => {
  const data = await serverRequest({
    url: `/personagem/${characterTag}`,
    method: "GET",
  });

  return {
    ...data,
    skills: data.skills.split(",").map((skill) => skill.trim()),
    hobbies: data.hobbies.split(",").map((hobbie) => hobbie.trim()),
  };
};

// Componente de apresentação
const Conteudo = ({ character, characterTag }) => (
  <div
    className="min-h-screen bg-[#0B070F] text-white p-10 flex justify-center items-center"
    style={{
      backgroundImage: 'url("/diagonal-pattern.png")',
      backgroundSize: "cover",
      backgroundRepeat: "repeat",
    }}
  >
    <div className="w-full max-w-5xl bg-[#2D254A] rounded-lg shadow-lg overflow-hidden">
      <div className="bg-[#4E3B6F] py-4 px-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">{characterTag}</h2>
        <div className="bg-[#6E54A3] text-white px-4 py-2 rounded-md uppercase text-sm">
          Characters & Pets
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6 flex flex-col items-center">
          <img
            src={character.images}
            alt={characterTag}
            className="rounded-lg shadow-md mb-4"
          />
          <div className="p-6 flex space-x-4">
            {["https://via.placeholder.com/150", "https://via.placeholder.com/150"].map(
              (src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Character thumbnail"
                  className="w-24 h-24 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                />
              )
            )}
          </div>
        </div>
        <div className="md:w-1/2 p-6 bg-[#3D3458] rounded-lg">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Description</h3>
            <p className="text-[#C8B8E4] text-justify leading-relaxed">
              {character.description}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Affiliations</h3>
            <p className="text-[#C8B8E4]">{character.affiliations}</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <ul className="space-y-1">
                {character.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-[#C8B8E4] hover:text-white cursor-pointer"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Hobbies</h3>
              <ul className="space-y-1">
                {character.hobbies.map((hobbie, index) => (
                  <li
                    key={index}
                    className="text-[#C8B8E4] hover:text-white cursor-pointer"
                  >
                    {hobbie}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CharacterLoader = ({ characterTag }) => {
  const [character, setCharacter] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCharacterData(characterTag);
        setCharacter(data);
      } catch (err) {
        setError("Failed to load character data.");
      }
    };
    loadData();
  }, [characterTag]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  return <Conteudo character={character} characterTag={characterTag} />;
};

// Novo componente para obter o characterTag
const FetchCharacterTag = ({ children }) => {
  const searchParams = useSearchParams();
  const characterTag = searchParams.get("name") || "Personagem Desconhecido";

  return children(characterTag);
};

const PersonagemPage = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <FetchCharacterTag>
          {(characterTag) => <CharacterLoader characterTag={characterTag} />}
        </FetchCharacterTag>
      </Suspense>
    </Layout>
  );
};

export default PersonagemPage;
