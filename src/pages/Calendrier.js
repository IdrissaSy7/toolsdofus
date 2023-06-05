import React from "react";
import Almanax from "../components/Almanax";
import Navigation from "../components/Navigation";

const Calendrier = () => {
  return (
    <div>
      <Navigation />
      <div className="content" id="almacontent">
        <h1 className="center">Almanax</h1>
        <div className="center">
          <Almanax />
        </div>
      </div>
    </div>
  );
};

export default Calendrier;
