import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./containers/ProfileContainer/ProfileContainer.css";
import "./containers/AppContainer/AppContainer.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import AppContainer from "./containers/AppContainer";
import ProfileContainer from "./containers/ProfileContainer";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1>
      <div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div> */}
      <Routes>
        <Route path="/" element={<p>Landing page</p>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} /> */}
        <Route path="/login" element={<p>Login</p>} />
        <Route path="/signup" element={<p>Signup</p>} />
        <Route path="app" element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" alement={<ProfileContainer />}>
            <Route index path="detail" element={<Profile />} />
            <Route path="about" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
