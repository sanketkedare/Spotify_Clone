import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Authentication from "./Components/Authentication/Authentication";
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/pages/SignUp";
import Login from "./Components/pages/Login";
import Wrapper from "./Components/Wrapper";
import Search from "./Components/Search/Search";
import PopularArtist from "./Components/pages/PopularArtist";

function App() {
  return (
    <Wrapper>
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/search" element = {<Search/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="popularartist" element={<PopularArtist/>} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/user" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </Wrapper>
  );
}

export default App;
