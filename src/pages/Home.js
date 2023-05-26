import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="root">
      <Navigation />
      <div className="content">
        <h1 className="center">Accueil</h1>
        <div className="home-content">
          <div>
            <p>
              Ce site fourni des informations à propos du MMORPG{" "}
              <a href="https://www.dofus.com/fr" target="_blank">
                Dofus
              </a>
              . Vous pourrez trouver ici un calendrier de l'Almanax, une Map
              interactive contenant la position de toutes les ressources du jeu
              et un Outil d'Achat Revente permettant de garder un oeil sur ses
              ventes.
            </p>

            <p>
              Si vous souhaitez me signaler un bug :
              <a href="mailto: contact117817@gmail.com"> Contact</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
