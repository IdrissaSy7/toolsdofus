import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AchatRevente from "./pages/AchatRevente";
import Map from "./pages/Map";
import Calendrier from "./pages/Calendrier";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/achatrevente" element={<AchatRevente />} />
        <Route path="/map" element={<Map />} />
        <Route path="/almanax" element={<Calendrier />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
