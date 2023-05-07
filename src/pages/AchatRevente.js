import React from "react";
import Navigation from "../components/Navigation";
import OutilAR from "../components/OutilAR";

const AchatRevente = () => {
  return (
    <div>
      <Navigation />
      <div className="content">
        <h1 className="center">Outil d'Achat Revente</h1>
        <OutilAR />
      </div>
    </div>
  );
};

export default AchatRevente;
