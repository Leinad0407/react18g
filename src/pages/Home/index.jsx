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
  return <h1>Welcome</h1>;
}
