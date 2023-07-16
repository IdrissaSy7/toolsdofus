import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="root">
      <Navigation />
      <div className="content">
        <div className="home-content">
          <div className="homeImg">
            <h1>DofusLand</h1>
          </div>
          <div className="home-content-text-maj">
            <div className="home-text">
              <p>
                Ce site fourni des informations à propos du MMORPG{" "}
                <a href="https://www.dofus.com/fr" target="_blank">
                  Dofus
                </a>
                . Vous pourrez trouver ici un Calendrier de l'Almanax, une Map
                interactive contenant la position de toutes les ressources du
                jeu et un Outil d'Achat Revente permettant de garder un oeil sur
                ses ventes.
              </p>

              <p>
                Si vous souhaitez me signaler un bug :
                <a href="mailto: contact117817@gmail.com"> Contact</a>
              </p>

              <p>
                Attention : Certaines illustrations sont la propriété exclusives
                d'
                <a href="https://www.ankama.com/fr" target="_blank">
                  Ankama
                </a>
              </p>
            </div>
            <div className="home-maj">
              <p>A jour avec la 2.68 :</p>
              <p>
                Almanax <span className="update updated"></span>
              </p>
              <p>
                Map <span className="update updated"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
