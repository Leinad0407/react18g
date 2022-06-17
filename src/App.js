import { useState } from "react";

import "./App.css";

function App() {
  const [itemActive, setItemActive] = useState(null)

  constIsActive = (itemNumber)=> itemNumber === itemActive
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li onClick = {()=>setItemActive(1)} className={`${isActive(1) ? 'active': "inactive"}`}>Texto1</li>
          <li onClick = {()=>setItemActive(2)} className={`${isActive(2) ? 'active': "inactive"}`}>Texto2</li>
          <li onClick = {()=>setItemActive(3)} className={`${isActive(3) ? 'active': "inactive"}`}>Texto3</li>
          <li onClick = {()=>setItemActive(4)} className={`${isActive(4) ? 'active': "inactive"}`}>Texto4</li>
          <li onClick = {()=>setItemActive(5)} className={`${isActive(5) ? 'active': "inactive"}`}>Texto5</li>   
        </ul>
      </header>
    </div>
  );
}

export default App;
