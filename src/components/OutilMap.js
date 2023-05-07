import React, { useEffect, useRef } from "react";
import L from "leaflet";

const OutilMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    const config = {
      mapImgWidth: 910,
      mapImgHeight: 653,
      minZoom: 1,
      maxZoom: 3,
      tileSize: 256,
      crs: L.CRS.Simple,
      attributionControl: false,
      ratio: 7,
      zoomControl: false,
    };

    const zoom = 1; // Zoom initial
    const lat = -500; // Point central de la map
    const lng = 650; // Point central de la map

    const map = L.map(mapRef.current, config).setView([lat, lng], zoom);
    L.tileLayer("./Tiles/1/{z}/{y}/{x}.jpg", {}).addTo(map);

    const xOffset = 664; // Décalage en pixels vers la droite
    const yOffset = 506.5; // Décalage en pixels vers le bas

    // Fonction qui converti les coordonnées Leaflet en Dofus
    function leafletCoordsToDofusCoords(mapY, mapX) {
      let dofusX =
        (mapX - xOffset) / (config.mapImgWidth / Math.pow(2, config.ratio));
      let dofusY =
        -(mapY + yOffset) / (config.mapImgHeight / Math.pow(2, config.ratio));
      return [dofusX, dofusY];
    }

    // Fonction qui converti les coordonnées Dofus en Leaflet
    function dofusCoordsToLeafletCoords(dofusX, dofusY) {
      let mapX =
        dofusX * (config.mapImgWidth / Math.pow(2, config.ratio)) + xOffset;
      let mapY =
        -dofusY * (config.mapImgHeight / Math.pow(2, config.ratio)) - yOffset;
      return [mapY, mapX];
    }

    function mouseMoveOnMap(e) {
      let coords = leafletCoordsToDofusCoords(e.latlng.lat, e.latlng.lng);
      let x = Math.floor(coords[0]);
      let y = Math.floor(coords[1]);
      var divCoordinates = document.getElementById("position");
      divCoordinates.innerHTML = x + ", " + y;
      divCoordinates.style.top = e.containerPoint.y + 50 + "px";
      divCoordinates.style.left = e.containerPoint.x + 50 + "px";
      divCoordinates.style.display = "block";
      objOnMap.rectangle.setLatLng(dofusCoordsToLeafletCoords(x, y));
    }

    function zoomChangeOnMap(e) {
      var iconRectangle = objOnMap.rectangle.options.icon;
      iconRectangle.options.iconSize = getRectangleOnMapSize();
      objOnMap.rectangle.setIcon(iconRectangle);
    }

    function getRectangleOnMapSize() {
      var zoom = map.getZoom();
      return [
        config.mapImgWidth / Math.pow(2, config.ratio - zoom) - 2,
        config.mapImgHeight / Math.pow(2, config.ratio - zoom) - 2,
      ];
    }

    var objOnMap = {
      rectangle: null,
    };

    objOnMap.rectangle = L.marker(dofusCoordsToLeafletCoords(0, 0), {
      interactive: false,
      icon: L.divIcon({
        className: "rectangleOnMap",
        iconAnchor: [0, 0],
        iconSize: getRectangleOnMapSize(),
      }),
    }).addTo(map);

    function copyCoordinates(e) {
      const coords = leafletCoordsToDofusCoords(e.latlng.lat, e.latlng.lng);
      const x = Math.floor(coords[0]);
      const y = Math.floor(coords[1]);
      const textToCopy = `/travel ${x} ${y}`;

      try {
        navigator.clipboard.writeText(textToCopy);
        console.log("Position copiée:", textToCopy);
      } catch (err) {
        console.error("Erreur lors de la copie:", err);
      }
    }

    map.on("mousemove", mouseMoveOnMap);
    map.on("zoomend", zoomChangeOnMap);
    map.on("click", copyCoordinates);

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <>
      <div id="position"></div>
      <div ref={mapRef} id="map"></div>
    </>
  );
};

export default OutilMap;
