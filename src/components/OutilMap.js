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
      zoomSnap: 0.5,
    };

    const zoom = 2; // Zoom initial
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

    // Fonction pour voir les coordonnées
    function mouseMoveOnMap(e) {
      let coords = leafletCoordsToDofusCoords(e.latlng.lat, e.latlng.lng);
      let x = Math.floor(coords[0]);
      let y = Math.floor(coords[1]);
      var divCoordinates = document.getElementById("position");
      divCoordinates.innerHTML = x + ", " + y;
      divCoordinates.style.top = e.containerPoint.y + 20 + "px";
      divCoordinates.style.left = e.containerPoint.x + 40 + "px";
      divCoordinates.style.display = "block";
      objOnMap.rectangle.setLatLng(dofusCoordsToLeafletCoords(x, y));
    }

    // Fonction qui cache la div quand la souris est en dehors de la map
    function mouseOutOfMap(e) {
      var divCoordinates = document.getElementById("position");
      divCoordinates.style.display = "none";
    }

    // Met a jour le rectangle en fonction du zoom
    function zoomChangeOnMap(e) {
      var iconRectangle = objOnMap.rectangle.options.icon;
      iconRectangle.options.iconSize = getRectangleOnMapSize();
      objOnMap.rectangle.setIcon(iconRectangle);

      // Mets à jour la taille de l'image en fonction du niveau de zoom
      const zoom = map.getZoom();
      const iconHeight = 12 * Math.pow(2, zoom - 1);
      document.documentElement.style.setProperty(
        "--icon-height",
        `${iconHeight}px`
      );

      // Met à jour les marqueurs en fonction du niveau de zoom
      updateResourceMarkers();
    }

    // Regle la taille du rectangle
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

    // Fonction pour copier les coordonnées
    window.copyCoordinates = function (x, y) {
      const textToCopy = `/travel ${x} ${y}`;

      try {
        navigator.clipboard.writeText(textToCopy);
        setCopiedPosition({ x, y });
        // Cache l'indicateur de position
        setTimeout(() => {
          setCopiedPosition(null);
        }, 2000);
      } catch (err) {
        console.error("Erreur lors de la copie:", err);
      }
    };

    // Compte les occurrences de chaque ressource dans un tableau
    function countResources(resources) {
      const resourceCounts = {};
      resources.forEach((resource) => {
        resourceCounts[resource.name] =
          (resourceCounts[resource.name] || 0) + 1;
      });
      return resourceCounts;
    }

    // Pop-up au clic sur une position
    const popup = (e) => {
      closeOtherLayers();
      const coords = leafletCoordsToDofusCoords(e.latlng.lat, e.latlng.lng);
      const x = Math.floor(coords[0]);
      const y = Math.floor(coords[1]);

      // Affiche les ressources aux coordonnées spécifiées dans la console
      const resourcesAtPosition = getResourcesAtPosition(x, y);

      // Convertie les coordonnées Dofus en Leaflet
      const latlng = dofusCoordsToLeafletCoords(x, y);

      // Compte les occurrences de chaque ressource et formate la chaîne
      const resourceCounts = countResources(resourcesAtPosition);
      const resourceList = Object.entries(resourceCounts)
        .map(([resourceName, count]) => `${count} x ${resourceName}`)
        .join("<br>");

      var popupContent = `
      <div class="popupContent">
        <p>
          <span>
                  <img src="./img/dragodinde.png" alt="image dragodinde" /> Voyager vers 
              <span onclick="copyCoordinates('${x}', '${y}')">
              <span class="coords"> [${x}, ${y}]</span>
            </span>
            </span>

            <span class="resource-list">
           ${resourceList ? "<br>" + resourceList : ""}
            </span>
        </p>
      </div>
  `;

      var popupInstance = L.popup()
        .setLatLng(latlng)
        .setContent(popupContent)
        .openOn(map);

      setTimeout(() => {
        popupInstance.remove();
      }, 4000);
    };

    // Groupe les ressources qui sont au meme point
    function groupAndCountPoints(points) {
      const grouped = {};

      points.forEach((point) => {
        const key = point.toString();
        if (!grouped[key]) {
          grouped[key] = { count: 1, coordinates: point };
        } else {
          grouped[key].count++;
        }
      });

      return Object.values(grouped);
    }

    // Vérifie si les coordonées sont dans la limite de carte
    function isCoordinateInView(coordinate) {
      const bounds = map.getBounds();
      const latLng = dofusCoordsToLeafletCoords(coordinate[0], coordinate[1]);
      return bounds.contains(latLng);
    }

    // Renvoie les ressources sur chaque position
    function getResourcesAtPosition(x, y) {
      const resourcesAtPosition = [];
      for (const job in jobs) {
        const jobResources = jobs[job];
        jobResources.forEach((resource) => {
          resource.data.forEach((point) => {
            if (point[0] === x && point[1] === y) {
              const groupName = `${resource.name}`;
              const layerGroup = overlayMaps[job][groupName];
              if (map.hasLayer(layerGroup) && isCoordinateInView(point)) {
                resourcesAtPosition.push(resource);
              }
            }
          });
        });
      }
      return resourcesAtPosition;
    }

    // Crée un indicateur de ressources
    function createNumberedIcon(number, imgUrl, zoom, maxZoom) {
      return L.divIcon({
        className: "numbered-icon",
        html: `
                <img src="${imgUrl}" alt="Icone de ressource" />
                <span style="display: ${
                  zoom === 3 ? "inline" : "none"
                }">${number}</span>
              `,
      });
    }

    // Fonction pour ajouter des marqueurs pour chaque ressource
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
        const icon = createNumberedIcon(group.count, imgUrl, map.getZoom());
        const marker = L.marker(coordinates, { icon: icon });
        layerGroup.addLayer(marker);
      });
    }

    function updateResourceMarkers() {
      for (const job in overlayMaps) {
        for (const groupName in overlayMaps[job]) {
          const layerGroup = overlayMaps[job][groupName];
          if (map.hasLayer(layerGroup)) {
            layerGroup.clearLayers();
            const jobResource = jobs[job].find(
              (resource) => resource.name === groupName
            );
            if (jobResource) {
              const visibleResourcePoints =
                jobResource.data.filter(isCoordinateInView);
              const resourceGroup = groupAndCountPoints(visibleResourcePoints);
              addResourceMarkers(
                resourceGroup,
                jobResource.name,
                jobResource.imgUrl,
                layerGroup
              );
            }
          }
        }
      }
    }

    // Ajoute les groupes de métiers à overlayMaps
    const overlayMaps = {
      Alchimiste: {},
      Bucheron: {},
      Paysan: {},
      Mineur: {},
      Pecheur: {},
    };

    // Boucle sur les métiers et leurs ressources pour ajouter des marqueurs
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

    // Fonction pour fermer tous les layers sauf celui qui est passé en argument
    function closeOtherLayers(excludeJob) {
      Object.keys(overlayMaps).forEach((job) => {
        if (job !== excludeJob) {
          const controlContainer = document.querySelector(
            `[data-job="${job.toLowerCase()}"]`
          );
          const resourcesContainer =
            controlContainer.querySelector(".job-resources");
          const title = controlContainer;

          if (resourcesContainer.classList.contains("open")) {
            resourcesContainer.classList.remove("open");
            title.classList.remove("active");
          }
        }
      });
    }

    // Crée un L.Control.Layers pour chaque métier
    Object.keys(overlayMaps).forEach((job) => {
      const control = L.control.layers(null, overlayMaps[job], {
        collapsed: false,
        position: "topleft",
      });
      control.addTo(map);

      // Ajoute un titre pour chaque métier
      const controlContainer = control.getContainer();
      const title = L.DomUtil.create("div", "job-title", controlContainer);
      title.innerText = job;
      title.setAttribute("data-job", job.toLowerCase());

      // Ajoute un conteneur pour les ressources
      const resourcesContainer = L.DomUtil.create(
        "div",
        "job-resources",
        controlContainer
      );
      const layersList = controlContainer.querySelector(
        ".leaflet-control-layers-list"
      );
      resourcesContainer.appendChild(layersList);

      // Ajoute le conteneur pour les ressources à l'intérieur du titre
      title.appendChild(resourcesContainer);

      title.addEventListener("click", () => {
        const isOpen = resourcesContainer.classList.toggle("open");
        title.classList.toggle("active");

        if (isOpen) {
          closeOtherLayers(job);
        }
      });
    });

    map.on("mousemove", mouseMoveOnMap);
    map.on("mouseout", mouseOutOfMap);
    map.on("moveend", updateResourceMarkers);
    map.on("zoomend", () => {
      zoomChangeOnMap();
      updateResourceMarkers();
    });
    map.on("click", popup);

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
          <img src="./img/dragodinde.png" alt="image dragodinde" />
          Position copiée : {copiedPosition.x}, {copiedPosition.y}
        </div>
      )}
      <div id="position"></div>
      <div ref={mapRef} id="map"></div>
    </>
  );
};

export default OutilMap;
