// Components
import Card from "./components/Card";

import "./App.css";
import { useState } from "react";

function App() {
  const [pesosMexicanos, setPesosMexicanos] = useState("");
  const [dolares, setDolares] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Cambiar Divisas");
    const cambio = [
      {
        pesosMexicanos,
        dolares: pesosMexicanos/22,
      },
    ];

    setPesosMexicanos("pesosMexicanos");
    setDolares("dolares");
  };

  console.log(pesosMexicanos, "PESOSMEXICANOS");
  console.log(dolares, "dolares")

  return (
    <div className="App">
      <div className="main-container">
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={cambio}
          onChange={(event) => setPesosMexicanos(event.target.value)}
        />
        <input
          value={cambio}
          onChange={(event) => setDolares(event.target.value)}
        />
          <button type="submit">Agregar cantidad</button>
      </form>
    </div>
  );
}

export default App;