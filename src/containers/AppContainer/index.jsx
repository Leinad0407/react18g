import { Outlet, Link } from "react-router-dom";

export default function AppContainer() {
  return (
    <div>
      <h1>App</h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}
