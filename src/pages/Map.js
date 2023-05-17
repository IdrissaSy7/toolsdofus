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
        <option value="1" className="option">
          Monde des Douze
        </option>
        <option value="2">Incarnam</option>
      </select>
      <OutilMap key={mapId} mapId={mapId} />
    </div>
  );
};

export default Map;
