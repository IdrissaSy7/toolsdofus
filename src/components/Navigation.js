import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navtitle">
        <p>Dotools</p>
        <img src="./img/encyclopedia.png" alt="image encyclopedie" />
      </div>

      <ul>
        <NavLink to="/">
          <li>
            <img src="./img/maison.png" alt="image home" />
          </li>
        </NavLink>

        <NavLink to="/achatrevente">
          <li>
            <img src="./img/magasin.png" alt="image magasin" />
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
