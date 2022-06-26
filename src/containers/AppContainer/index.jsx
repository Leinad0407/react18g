import { Outlet } from "react-router-dom";

export default function AppContainer() {
  return (
    <div>
      <h1>App</h1>
      <Outlet />
    </div>
  );
}
