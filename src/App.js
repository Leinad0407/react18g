import { useState } from "react";

import "./App.css";

// Components
import Title from "./components/Title";
import FullName from "./components/FullName";

function App() {
  // Local state
  // [0] = valor del state
  // [1] = función que actualiza el state
  // si `useState` recibe un argumento, este será el valor inicial del estado
  // si no el estado es undefined
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  console.log(count, "COUNT");
  console.log(setCount, "SET_COUNT");

  const handleClick = (increase) => {
    let newCount = count;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);
  };

  const isMultiple = count % 2 === 0 ? true : false;

  const countClass = isMultiple ? "prendido" : "apagado" 

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Aaron"></Title>
        <FullName firstName="Luis" lastName="Vera"></FullName>

        <p>Counter: {count}</p>
        <button onClick={() => handleClick(true)}>Increase</button>
        <button onClick={() => handleClick(false)}>Decrease</button>

        <div className = {`square ${isOn? "square-on" : "square-off"}`}>{isOn? 'ON' : "OFF"}</div>
        <button onClick={() => setIsOn(true)}>ON</button>
        <button onClick={() => setIsOn(false)}>OFF</button>


      </header>
    </div>
  );
}

export default App;
