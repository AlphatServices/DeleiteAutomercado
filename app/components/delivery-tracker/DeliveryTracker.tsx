"use client";
import style from "./DeliveryTracker.module.css";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useModal } from "../../context/ModalContext";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_API_MAPBOX;

function DeliveryTracker() {
  const { isDeliveryModalOpen, toggleDeliveryModal } = useModal();

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  // Coordenadas de ejemplo
  const origin: [number, number] = [-64.695239, 10.193888]; // Automercado Deleite
  const destination: [number, number] = [-64.696447, 10.20229]; // Virgen

  useEffect(() => {
    // const modal = document.getElementById("modal-delivery");
    // const btn = document.getElementById("btn-delivery");
    // const info = modal?.querySelector(":scope > div"); // ":scope" asegura que sea hijo directo

    // modal?.addEventListener("click", (e) => {
    //   if (e.target === modal) {
    //     modal?.classList.add("fade");
    //     info?.classList.remove("slide-right");
    //     info?.classList.add("slide-left"); // Agrega la clase si existe
    //   }
    // });

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/light-v11",
      center: origin,
      zoom: 14,
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
    <div
      className={`${style.modal} ${!isDeliveryModalOpen ? "" : style.fade}`}
      onClick={(e) => {
        // Cierra solo si haces click fuera del contenido
        if (e.target === e.currentTarget) {
          toggleDeliveryModal();
        }
      }}
    >
      <div
        className={`${style["container-delivery"]} ${
          !isDeliveryModalOpen ? style.slideLeft : style.slideRight
        }`}
      >
        <div
          ref={mapContainerRef}
          className={style["delivery-map"]}
          id="map"
        ></div>
        <div className={style["info-delivery"]}>
          {distance && duration && (
            <div className={style["estimated"]}>
              <div>
                <img src="delivery-tracker/time.svg" alt="" />
                <div>
                  <p>Tiempo Estimado</p>
                  <span>{duration}</span>
                </div>
              </div>
              <div>
                <img src="delivery-tracker/map.svg" alt="" />
                <div>
                  <p>Distancia</p>
                  <span>{distance}</span>
                </div>
              </div>
            </div>
          )}
          <div className={style["progress-bar"]}>
            <div className={`${style["step"]} ${style["active"]}`}></div>
            <div className={`${style["step"]} ${style["active"]}`}></div>
            <div className={`${style["step"]} ${style["active"]}`}></div>
            <div className={style["step"]}></div>
            <div className={style["step"]}></div>
          </div>
          <div className={style["timeline"]}>
            <div className={style["status-heading"]}>
              <div className={style["status-icon"]}>
                <img src="delivery-tracker/timex16.svg" alt="" />
              </div>
              <h4>Delivered</h4>
            </div>

            <div className={style["status-item"]}>
              <div className={style["status-icon"]}>
                <img src="delivery-tracker/checkmark.svg" alt="" />
              </div>
              <div className={style["status-title"]}>On the way</div>
              <div className={style["status-time"]}>12:48 am</div>
            </div>
            <div className={style["status-item"]}>
              <div className={style["status-icon"]}>
                <img src="delivery-tracker/checkmark.svg" alt="" />
              </div>
              <div className={style["status-title"]}>On the way</div>
              <div className={style["status-time"]}>12:48 am</div>
            </div>

            <a className={style["see-more"]}>
              See more <img src="delivery-tracker/chevron-down.svg" alt="" />
            </a>
          </div>
          <div className={style["buttons"]}>
            <a className={style["btn-message"]}>
              <img src="delivery-tracker/message.svg" alt="" />
            </a>
            <a className={style["btn-call"]}>Llamar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryTracker;
