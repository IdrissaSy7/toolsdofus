import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1 className="title">Accueil</h1>
      <div className="title">
        <iframe
          width="350"
          height="150"
          frameborder="0"
          scrolling="no"
          src="https://www.dimtopia.com/widget-almanax/dpln-retro"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
