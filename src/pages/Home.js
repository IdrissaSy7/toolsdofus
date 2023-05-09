import React from "react";
import Navigation from "../components/Navigation";
import Almanax from "../components/Almanax";

const Home = () => {
  return (
    <div className="root">
      <Navigation />
      <div className="content">
        <h1 className="center">Accueil</h1>
        <div className="home-content">
          <div>
            <h2>Almanax du jour</h2>
            <Almanax />
          </div>
          <div>
            <p>
              Ce site fourni des informations à propos du MMORPG{" "}
              <a href="https://www.dofus.com/fr" target="_blank">
                Dofus
              </a>
              . Vous pourrez trouver ici une Map interactive contenant la
              position de toutes les ressources du jeu et un Outil d'Achat
              Revente permettant de garder un oeil sur ses ventes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
