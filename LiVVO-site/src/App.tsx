import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FacMotorista from "./pages/FacMotorista";
import FacPassageiro from "./pages/FacPassageiro";
import TermosMotorista from "./pages/TermoUsoMotorista";
import TermosPassageiro from "./pages/TermoUsoPassageiro";
import Suporte from "./pages/Suporte";
import SobreNos from "./pages/SobreNos";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/fac/motorista" element={<FacMotorista />} />
          <Route path="/fac/passageiro" element={<FacPassageiro />} />
          <Route path="/fac/termo-motorista" element={<TermosMotorista />} />
          <Route path="/fac/termo-passageiro" element={<TermosPassageiro />} />
          <Route path="/suporte" element={<Suporte />} />
        </Routes>
        </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;