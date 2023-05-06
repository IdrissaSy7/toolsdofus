import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AchatRevente from "./pages/AchatRevente";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/achatrevente" element={<AchatRevente />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
