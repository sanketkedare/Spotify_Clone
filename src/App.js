import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Authentication from "./Components/Authentication/Authentication";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />}>
          {/* Extra Paths Here */}
        </Route>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/user" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
