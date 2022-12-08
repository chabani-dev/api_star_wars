import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Peoples from "./components/Peoples";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/peoles" element={<Peoples />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
