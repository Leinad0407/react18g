import { Link, Outlet } from "react-router-dom";

export default function ProfileContainer() {
  return (
    <div>
      <Link to="detail">Profile</Link>
      <Link to="about">About</Link>
      <Outlet />
    </div>
  );
}
