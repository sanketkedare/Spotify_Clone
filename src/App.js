import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Authentication from "./Components/Authentication/Authentication";
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/pages/SignUp";
import Login from "./Components/pages/Login";
import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <Wrapper>
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />}>
          {/* Extra Paths Here */}
        </Route>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/user" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </Wrapper>
  );
}

export default App;
