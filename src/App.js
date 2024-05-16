import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Authentication from "./Components/Authentication/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />} >

        </Route>
        <Route path="/auth" element = {<Authentication/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
