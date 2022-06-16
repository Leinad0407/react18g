import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

// Components

import Title from './components/Title';

function App() {

  // Local state
  // [0] = valor del state
  // [1] = función que actualiza el state
  // si `useState` recibe un argumento, este será el valor inicial del estado
  // si no el estado es undefined
  const [count, setCount] = useState(0)
  console.log(count, 'COUNT')
  console.log(setCount, 'SET_COUNT')

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleClick2 = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <header className="App-header">

        <p>Has hecho click {count} veces</p>
        <button onClick={handleClick}>Click me</button>

        <p>Has hecho click {count} veces</p>
        <button onClick={handleClick2}>Click me for less</button>

      </header>
    </div>
  );
}

export default App;
