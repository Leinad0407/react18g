import { Outlet, Link } from "react-router-dom";

export default function AppContainer() {
  return (
    <div className="App-Container">
      <div className="App-content-container">
        <div className="app-conteiner-nav">
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="profile">Profile</Link>
          </nav>
        </div>
        <div className="app-conteiner-content">
          <div>
          <Outlet />

          </div>
        </div>
      </div>
    </div>
  );
}
