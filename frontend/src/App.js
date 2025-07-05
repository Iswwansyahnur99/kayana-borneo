import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SacredHero from "./components/SacredHero";
import SacredCrafts from "./components/SacredCrafts";
import LaminJourney from "./components/LaminJourney";
import RitesOfKnowledge from "./components/RitesOfKnowledge";
import GuardianshipImpact from "./components/GuardianshipImpact";
import SacredFooter from "./components/SacredFooter";

const SacredHome = () => {
  return (
    <div className="bg-dayak-forest min-h-screen">
      <SacredHero />
      <SacredCrafts />
      <LaminJourney />
      <RitesOfKnowledge />
      <GuardianshipImpact />
      <SacredFooter />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SacredHome />}>
            <Route index element={<SacredHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;