import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import { mapConfigs } from "./MapConfig";

const OutilMap = ({ mapId }) => {
  const mapRef = useRef();
  const [copiedPosition, setCopiedPosition] = useState(null);
  const jobs = require(`../ressources/Monde${mapId}`).default;

  useEffect(() => {
    const config = {
      mapImgWidth: mapConfigs[mapId].mapImgWidth,
      mapImgHeight: mapConfigs[mapId].mapImgHeight,
      minZoom: mapConfigs[mapId].minZoom,
      maxZoom: mapConfigs[mapId].maxZoom,
      tileSize: 256,
      crs: L.CRS.Simple,
      attributionControl: false,
      ratio: mapConfigs[mapId].ratio,
      zoomControl: false,
      zoomSnap: 0.5,
      zoom: mapConfigs[mapId].zoom,
      lat: mapConfigs[mapId].lat,
      lng: mapConfigs[mapId].lng,
      xOffset: mapConfigs[mapId].xOffset,
      yOffset: mapConfigs[mapId].yOffset,
      tileLayerPath: mapConfigs[mapId].tileLayerPath,
    };

    const map = L.map(mapRef.current, config).setView(
      [config.lat, config.lng],
      config.zoom
    );
    L.tileLayer(config.tileLayerPath, {}).addTo(map);

    // Fonction qui converti les coordonnées Leaflet en Dofus
    function leafletCoordsToDofusCoords(leafletY, leafletX) {
      let dofusX =
        (leafletX - config.xOffset) /
        (config.mapImgWidth / Math.pow(2, config.ratio));
      let dofusY =
        -(leafletY + config.yOffset) /
        (config.mapImgHeight / Math.pow(2, config.ratio));
      return [dofusX, dofusY];
    }

    // Fonction qui converti les coordonnées Dofus en Leaflet
    function dofusCoordsToLeafletCoords(dofusX, dofusY) {
      let leafletX =
        dofusX * (config.mapImgWidth / Math.pow(2, config.ratio)) +
        config.xOffset;
      let leafletY =
        -dofusY * (config.mapImgHeight / Math.pow(2, config.ratio)) -
        config.yOffset;
      return [leafletY, leafletX];
    }

    // Fonction pour voir les coordonnées
    function mouseMoveOnMap(e) {
      let coords = leafletCoordsToDofusCoords(e.latlng.lat, e.latlng.lng);
      let x = Math.floor(coords[0]);
      let y = Math.floor(coords[1]);
      let divCoordinates = document.getElementById("position");
      let rectangle = document.querySelector(".rectangleOnMap");
      divCoordinates.innerHTML = `${x}, ${y}`;
      divCoordinates.style.top = e.containerPoint.y + 20 + "px";
      divCoordinates.style.left = e.containerPoint.x + 40 + "px";
      divCoordinates.style.display = "block";
      rectangle.style.display = "block";
      objOnMap.rectangle.setLatLng(dofusCoordsToLeafletCoords(x, y));
    }

    // Fonction qui cache la div quand la souris est en dehors de la map
    function mouseOutOfMap(e) {
      let divCoordinates = document.getElementById("position");
      let rectangle = document.querySelector(".rectangleOnMap");
      divCoordinates.style.display = "none";
      rectangle.style.display = "none";
    }

    // Mets à jour la taille de l'image de base
    const zoom = map.getZoom();
    const iconHeight = 12 * Math.pow(2, zoom - 1);
    document.documentElement.style.setProperty(
      "--icon-height",
      `${iconHeight}px`
    );
    const numberSize = 1 * Math.pow(1.1, zoom - 1);
    document.documentElement.style.setProperty(
      "--number-size",
      `${numberSize}rem`
    );

    // Met a jour le rectangle en fonction du zoom
    function zoomChangeOnMap(e) {
      let iconRectangle = objOnMap.rectangle.options.icon;
      iconRectangle.options.iconSize = getRectangleOnMapSize();
      objOnMap.rectangle.setIcon(iconRectangle);

      // Mets à jour la taille de l'image en fonction du niveau de zoom
      const zoom = map.getZoom();
      const iconHeight = 12 * Math.pow(2, zoom - 1);
      document.documentElement.style.setProperty(
        "--icon-height",
        `${iconHeight}px`
      );
      const numberSize = 1 * Math.pow(1.1, zoom - 1);
      document.documentElement.style.setProperty(
        "--number-size",
        `${numberSize}rem`
      );

      updateResourceMarkers();
    }

    // Regle la taille du rectangle
    function getRectangleOnMapSize() {
      let zoom = map.getZoom();
      return [
        config.mapImgWidth / Math.pow(2, config.ratio - zoom) - 2,
        config.mapImgHeight / Math.pow(2, config.ratio - zoom) - 2,
      ];
    }

    let objOnMap = {
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

    // Pop-up au clic sur une position
    const popup = (e) => {
      closeOtherLayers();
      const coords = leafletCoordsToDofusCoords(e.latlng.lat, e.latlng.lng);
      const x = Math.floor(coords[0]);
      const y = Math.floor(coords[1]);

      // Affiche les ressources aux coordonnées spécifiées
      const resourcesAtPosition = getResourcesAtPosition(x, y);

      // Convertie les coordonnées Dofus en Leaflet
      const latlng = dofusCoordsToLeafletCoords(x, y);

      // Compte les occurrences de chaque ressource
      const resourceList = resourcesAtPosition
        .reduce((accumulator, resource) => {
          const existingResource = accumulator.find(
            (item) => item.name === resource.name
          );

          if (existingResource) {
            existingResource.count++;
          } else {
            accumulator.push({
              name: resource.name,
              count: 1,
              imgUrl: resource.imgUrl,
            });
          }

          return accumulator;
        }, [])
        .map(({ name, count, imgUrl }) => {
          return `


          <img src="${imgUrl}" alt="${name}" /> ${count} x ${name}
          
          `;
        })
        .join("<br>");

      let popupContent = `
      <div class="popup">
        <p>
              <span>
                  <img src="./img/dragodinde.png" alt="image dragodinde" /> Voyager vers 
              <span onclick="copyCoordinates('${x}', '${y}')">
              <span class="coords"> [${x}, ${y}]</span>
            </span>
            </span>
            
            <span class="resource-list">
              ${resourceList} 
            </span>
        </p>
      </div>
  `;

      let popupInstance = L.popup()
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
              if (!overlayMaps[job] || !overlayMaps[job][groupName]) {
                return;
              }
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
    function createNumberedIcon(number, imgUrl, zoom) {
      let iconSize = getRectangleOnMapSize();
      let iconAnchor = [iconSize[0] / 2, iconSize[1] / 2];

      return L.divIcon({
        className: "numbered-resource",
        iconSize: iconSize,
        iconAnchor: iconAnchor,
        html: `
      <img src="${imgUrl}" alt="Icone de ressource" />
      <span style="display: ${zoom >= 3 ? "inline" : "none"}">${number}</span>
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

        const resourcesAtPosition = getResourcesAtPosition(
          group.coordinates[0],
          group.coordinates[1]
        );

        const uniqueResources = new Set(
          resourcesAtPosition.map((resource) => resource.name)
        );

        const number = resourcesAtPosition.length;

        let updatedImgUrl = imgUrl;
        if (uniqueResources.size > 1) {
          updatedImgUrl = "./img/metier.png";
        }

        const icon = createNumberedIcon(number, updatedImgUrl, map.getZoom());
        const marker = L.marker(coordinates, { icon: icon });
        layerGroup.addLayer(marker);
      });
    }

    // Fonction pour updater les marqueurs pour chaque ressource
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

      const checkboxes = controlContainer.querySelectorAll(
        ".leaflet-control-layers-selector"
      );

      if (checkboxes.length === 0) {
        title.classList.toggle("no-resource");
      }

      checkboxes.forEach((checkbox) => {
        const parentLabel = checkbox.closest("label");
        if (parentLabel) {
          const resourceName = parentLabel.innerText.trim();
          parentLabel.setAttribute("data-resource", resourceName);
        }
      });

      // Ajoute le conteneur pour les ressources à l'intérieur du titre
      title.appendChild(resourcesContainer);

      title.addEventListener("click", () => {
        const isOpen = resourcesContainer.classList.toggle("open");
        title.classList.toggle("active");

        updateResourceMarkers();

        if (isOpen) {
          closeOtherLayers(job);
        }
      });

      const divResource = document.querySelector(".leaflet-top");
      console.log(divResource);

      let divCoordinates = document.getElementById("position");
      let rectangle = document.querySelector(".rectangleOnMap");

      divResource.addEventListener("mouseenter", () => {
        divCoordinates.style.opacity = 0;
        rectangle.style.opacity = 0;
      });

      divResource.addEventListener("mouseleave", () => {
        divCoordinates.style.opacity = 1;
        rectangle.style.opacity = 1;
      });
    });

    map.on("mousemove", mouseMoveOnMap);
    map.on("mouseout", mouseOutOfMap);
    map.on("moveend", updateResourceMarkers);
    map.on("zoomend", () => {
      zoomChangeOnMap();
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
