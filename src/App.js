import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Detalle from "./components/Detalle"
import { ProductsProvider } from "./components/MyContext";
import {FavoritoProvider } from "./components/favoritosContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Favorito from "./components/Favoritos/Favorito";
import Preloader from "../src/components/Pre"
import ScrollToTop from "./components/ScrollToTop"

function App() {
    const [load, upadateLoad] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        upadateLoad(false);
      }, 1200);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <ProductsProvider>
      <FavoritoProvider>
      <Router>
      {load && <Preloader />}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/creaciones" element={<Projects />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/favorito" element={<Favorito />} />
        </Routes>
        <Footer />
        </div>
    </Router>
    </FavoritoProvider>
    </ProductsProvider>
  );
}

export default App;