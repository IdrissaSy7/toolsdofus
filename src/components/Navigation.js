import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <label for="checkbox">
        <i class="fa-solid fa-bars"></i>
      </label>

      <input type="checkbox" id="checkbox" />

      <label htmlFor="checkbox" id="checkbox">
        <ul>
          <NavLink to="/">
            <li>
              <img src="./img/maison.png" alt="image home" />
              <span>Accueil</span>
            </li>
          </NavLink>

          <NavLink to="/map">
            <li>
              <img src="./img/geoposition.png" alt="image bousolle" />
              <span>Map</span>
            </li>
          </NavLink>

          <NavLink to="/achatrevente">
            <li>
              <img src="./img/magasin.png" alt="image magasin" />
              <span>Vente</span>
            </li>
          </NavLink>
        </ul>
      </label>
    </div>
  );
};

export default Navigation;
