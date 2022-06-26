import { Outlet, Link } from "react-router-dom";

export default function ProfileContainer() {
  return (
    <div>
      <nav className="navbarProfile">
        <Link to="InfoPage">Info</Link>
        <Link to="EdithPage">Edith</Link>
      </nav>

      <Outlet />
    </div>
  );
}
