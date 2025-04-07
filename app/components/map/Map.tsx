// MapboxRoute.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhlaWx5biIsImEiOiJjbTR1ZWJ1dWkwNjR6Mm1xd2ZkcTV2ZWw5In0.hlJtQAsJzgKvff309imMZg";

const MapboxRoute: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  // Coordenadas de ejemplo
  const origin: [number, number] = [-64.695239, 10.193888]; // Ciudad de México
  const destination: [number, number] = [-64.696447, 10.20229]; // Otro punto en CDMX

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/light-v11",
      center: origin,
      zoom: 12,
      attributionControl: false,
    });

    // Establece marcadores personalizado
    const originEl = document.createElement("div");
    originEl.style.backgroundImage = "url(map/marker-1.svg)";
    originEl.style.width = "2rem";
    originEl.style.height = "2rem";
    originEl.style.backgroundSize = "cover";

    const destinationEl = document.createElement("div");
    destinationEl.style.backgroundImage = "url(map/marker-2.svg)";
    destinationEl.style.width = "2rem";
    destinationEl.style.height = "2rem";
    destinationEl.style.backgroundSize = "cover";

    // Añadir marcadores
    new mapboxgl.Marker(originEl).setLngLat(origin).addTo(map);
    new mapboxgl.Marker(destinationEl).setLngLat(destination).addTo(map);

    // Llamar a la API de direcciones de Mapbox
    const getRoute = async () => {
      const query = `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.join(
        ","
      )};${destination.join(",")}?geometries=geojson&access_token=${
        mapboxgl.accessToken
      }`;

      const response = await fetch(query);
      const data = await response.json();

      const route = data.routes[0];
      const routeGeoJSON: GeoJSON.Feature<GeoJSON.Geometry> = {
        type: "Feature",
        properties: {},
        geometry: route.geometry,
      };

      // Agregar la ruta al mapa
      map.on("load", () => {
        if (map.getSource("route")) {
          (map.getSource("route") as mapboxgl.GeoJSONSource).setData(
            routeGeoJSON
          );
        } else {
          map.addSource("route", {
            type: "geojson",
            data: routeGeoJSON,
          });

          map.addLayer({
            id: "route",
            type: "line",
            source: "route",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#555",
              "line-width": 5,
            },
          });
        }
      });

      // Calcular distancia y duración
      const distanceKm = (route.distance / 1000).toFixed(2);
      const durationMin = (route.duration / 60).toFixed(1);
      setDistance(`${distanceKm} km`);
      setDuration(`${durationMin} min`);
    };

    getRoute();

    // Limpieza
    return () => map.remove();
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div ref={mapContainerRef} style={{ width: "100%", height: "500px" }} />
      {distance && duration && (
        <div style={{ padding: "10px", backgroundColor: "#fff" }}>
          <p>
            <strong>Distancia:</strong> {distance}
          </p>
          <p>
            <strong>Duración estimada:</strong> {duration}
          </p>
        </div>
      )}
    </div>
  );
};

export default MapboxRoute;
