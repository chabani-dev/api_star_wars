import logo from "./Star-wars.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Peoples from "./components/Peoples";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <img src={logo} alt="" width="100" />
      <Routes>
        <Route path="/peoles/:id" element={<Peoples />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
