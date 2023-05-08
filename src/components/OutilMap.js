import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import jobs from "./Ressources";

const OutilMap = () => {
  const mapRef = useRef();
  const [copiedPosition, setCopiedPosition] = useState(null);

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

    // Fonction pour copier les coordonnées et mettre à jour l'état local
    const copyCoordinates = (e) => {
      const coords = leafletCoordsToDofusCoords(e.latlng.lat, e.latlng.lng);
      const x = Math.floor(coords[0]);
      const y = Math.floor(coords[1]);
      const textToCopy = `/travel ${x} ${y}`;

      try {
        navigator.clipboard.writeText(textToCopy);
        console.log("Position copiée:", textToCopy);

        // Mettre à jour l'état local avec la position copiée
        setCopiedPosition({ x, y });

        // Cacher l'indicateur de position après 1,5 secondes
        setTimeout(() => {
          setCopiedPosition(null);
        }, 1500);
      } catch (err) {
        console.error("Erreur lors de la copie:", err);
      }
    };

    // Groupe les ressources qui sont au meme point
    function groupAndCountPoints(points) {
      const grouped = {};

      points.forEach((point) => {
        const key = point.toString(); // Convertir les coordonnées en chaîne pour les utiliser comme clé

        if (!grouped[key]) {
          grouped[key] = { count: 1, coordinates: point };
        } else {
          grouped[key].count++;
        }
      });

      return Object.values(grouped);
    }

    // Crée un indicateur de ressources
    function createNumberedIcon(number, imgUrl) {
      return L.divIcon({
        className: "numbered-icon", // Nom de classe pour appliquer des styles personnalisés
        html: `<div class="numbered-icon-text">
    <span>${number}</span>
    <img src="${imgUrl}" alt="Resource icon" />
    </div>`,
        // Contenu HTML avec le nombre de ressources et l'image
        iconSize: [0, 0], // Taille de l'icône en pixels
        iconAnchor: [-25, 7], // Point de l'icône à aligner avec la position du marqueur
      });
    }

    // Créez une fonction pour ajouter des marqueurs pour chaque ressource
    function addResourceMarkers(
      resourceGroup,
      resourceName,
      imgUrl,
      layerGroup
    ) {
      resourceGroup.forEach((group) => {
        const coordinates = dofusCoordsToLeafletCoords(
          group.coordinates[0],
          group.coordinates[1]
        );
        const icon = createNumberedIcon(group.count, imgUrl);
        const marker = L.marker(coordinates, { icon: icon });
        layerGroup.addLayer(marker);
      });
    }

    // Ajoutez les groupes de métiers à overlayMaps
    const overlayMaps = {
      Alchimiste: {},
      Bucheron: {},
      Paysan: {},
      Mineur: {},
      Pecheur: {},
    };

    // // Bouclez sur les métiers et leurs ressources pour ajouter des marqueurs
    for (const job in jobs) {
      const jobResources = jobs[job];
      jobResources.forEach((resource) => {
        const groupName = `${resource.name}`;
        const resourceGroup = groupAndCountPoints(resource.data);
        const layerGroup = L.layerGroup();
        addResourceMarkers(
          resourceGroup,
          resource.name,
          resource.imgUrl,
          layerGroup
        );
        overlayMaps[job][groupName] = layerGroup;
      });
    }

    // // Fonction pour fermer tous les layers sauf celui qui est passé en argument
    function closeOtherLayers(excludeJob) {
      Object.keys(overlayMaps).forEach((job) => {
        if (job !== excludeJob) {
          const controlContainer = document.querySelector(
            `[data-job="${job.toLowerCase()}"]`
          );
          const resourcesContainer =
            controlContainer.querySelector(".job-resources");
          if (resourcesContainer.classList.contains("open")) {
            resourcesContainer.classList.remove("open");
          }
        }
      });
    }

    // Créez un L.Control.Layers pour chaque métier
    Object.keys(overlayMaps).forEach((job) => {
      const control = L.control.layers(null, overlayMaps[job], {
        collapsed: false,
        position: "topleft",
      });
      control.addTo(map);

      // Ajoutez un titre pour chaque métier
      const controlContainer = control.getContainer();
      const title = L.DomUtil.create("div", "job-title", controlContainer);
      title.innerText = job;
      title.setAttribute("data-job", job.toLowerCase());

      // Ajoutez un conteneur pour les ressources
      const resourcesContainer = L.DomUtil.create(
        "div",
        "job-resources",
        controlContainer
      );
      const layersList = controlContainer.querySelector(
        ".leaflet-control-layers-list"
      );
      resourcesContainer.appendChild(layersList);

      // Ajouter le conteneur pour les ressources à l'intérieur du titre
      title.appendChild(resourcesContainer);

      title.addEventListener("click", () => {
        const isOpen = resourcesContainer.classList.toggle("open");

        if (isOpen) {
          closeOtherLayers(job);
        }
      });
    });

    map.on("mousemove", mouseMoveOnMap);
    map.on("zoomend", zoomChangeOnMap);
    map.on("click", copyCoordinates);
    map.on("click", () => {
      closeOtherLayers();
    });

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <>
      {copiedPosition && (
        <div id="position-indicator">
          Position copiée : {copiedPosition.x}, {copiedPosition.y}
        </div>
      )}
      <div id="position"></div>
      <div ref={mapRef} id="map"></div>
    </>
  );
};

export default OutilMap;
