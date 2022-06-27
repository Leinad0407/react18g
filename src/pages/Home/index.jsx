import { useState, useEffect } from "react";
import { getCharacters } from "../../Services/Characters";
export default function Home() {
  //Request a Rick y Morty API
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharactersQuery = async () => {
      const data = await getCharacters();
      console.log(data);
      setCharacters(data.results);
    };
    getCharactersQuery();
  }, []);
  return characters.map((character) => (
    <div className="container">
      <div className="imageContainer">
        <img src={character.image} alt="img" />
      </div>
      <div className="infoContainer">
        <div>
          <p>Name</p>
          <p>{character.name}</p>
        </div>
        <div>
          <p>Gender</p>
          <p>{character.gender}</p>
        </div>
        <div>
          <p>specie</p>
          <p>{character.species}</p>
        </div>
        <div>
          <p>status</p>
          <p>{character.status}</p>
        </div>
      </div>
    </div>
  ));
}
