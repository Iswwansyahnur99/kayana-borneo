import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ProductCollections from "./components/ProductCollections";
import VirtualTours from "./components/VirtualTours";
import CulturalQuests from "./components/CulturalQuests";
import SocialImpact from "./components/SocialImpact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="bg-heritage-dark min-h-screen">
      <Hero />
      <ProductCollections />
      <VirtualTours />
      <CulturalQuests />
      <SocialImpact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;