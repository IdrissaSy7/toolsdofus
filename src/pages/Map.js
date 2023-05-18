import React, { useState } from "react";
import Navigation from "../components/Navigation";
import OutilMap from "../components/OutilMap";

const Map = () => {
  const [mapId, setMapId] = useState("1");

  const handleMapChange = (event) => {
    const selectedMapId = event.target.value;
    setMapId(selectedMapId);
  };

  return (
    <div>
      <Navigation />
      <select id="select-world" onChange={handleMapChange} value={mapId}>
        <option value="1">Monde des Douze</option>
        <option value="2">Incarnam</option>
        <option value="3">Château de Harebourg</option>
        <option value="4">Profondeurs de Sufokia</option>
        <option value="5">Épaves Silencieuses</option>
        <option value="6">Crocuzko</option>
        <option value="7">Wuking et Wukang</option>
        <option value="8">Galeries d'Ereboria</option>
      </select>
      <OutilMap key={mapId} mapId={mapId} />
    </div>
  );
};

export default Map;
