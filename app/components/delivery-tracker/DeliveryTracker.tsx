import style from "./DeliveryTracker.module.css";
import MapboxRoute from "../map/Map";

function DeliveryTracker() {
  return (
    <div className={style["modal"]}>
      <div className={style["container-delivery"]}>
        <div className={style["delivery-map"]} id="map">
          <MapboxRoute />
        </div>
        <div className={style["info-delivery"]}>
          <div className={style["estimated"]}>
            <div>
              <img src="delivery-tracker/time.svg" alt="" />
              <div>
                <p>Tiempo Estimado</p>
                <span>35 min</span>
              </div>
            </div>
            <div>
              <img src="delivery-tracker/map.svg" alt="" />
              <div>
                <p>Distancia</p>
                <span>3.6 km</span>
              </div>
            </div>
          </div>
          <div className={style["progress-bar"]}>
            <div className={style["step active"]}></div>
            <div className={style["step active"]}></div>
            <div className={style["step active"]}></div>
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
