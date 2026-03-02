import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FacMotorista from "./pages/FacMotorista";
import FacPassageiro from "./pages/FacPassageiro";
import TermosMotorista from "./pages/TermoUsoMotorista";
import TermosPassageiro from "./pages/TermoUsoPassageiro";
import Suporte from "./pages/Suporte";
import SobreNos from "./pages/SobreNos";

import "./App.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se tiver hash (#algumaCoisa)
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se não tiver hash, sobe pro topo
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

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