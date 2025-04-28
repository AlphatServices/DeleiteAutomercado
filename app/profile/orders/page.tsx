import styles from "./Orders.module.css";

export default function Orders() {
  return (
    <>
      <div className={styles["section-title"]}>Pedidos en camino</div>
      <div className={styles["orders-grid"]}>
        <div className={styles["order-card"]}>
          <div className={styles["order-header"]}>Orden #123456</div>
          <div className={styles["arrival-info"]}>
            <img src="/profile/orders/time.svg" alt="Reloj" className={styles["time-icon"]} />
            <div>
              <span>Llegada estimada</span>
              <span className={styles["eta"]}>35 min</span>
            </div>
            <a className={styles["track-btn"]}>Seguir</a>
          </div>
          <div className={styles["progress-bar"]}>
            <div className={`${styles["progress-step"]} ${styles["active"]}`}></div>
            <div className={`${styles["progress-step"]} ${styles["active"]}`}></div>
            <div className={`${styles["progress-step"]} ${styles["active"]}`}></div>
            <div className={styles["progress-step"]}></div>
            <div className={styles["progress-step"]}></div>
          </div>
        </div>
        <div className={styles["order-card"]}>
          <p className={styles["order-header"]}>Orden #11112</p>
          <div className={styles["arrival-info"]}>
            <img src="/profile/orders/time.svg" alt="Reloj" className={styles["time-icon"]} />
            <div>
              <span>Llegada estimada</span>
              <span className={styles["eta"]}>60 min</span>
            </div>
            <a className={styles["track-btn"]}>Seguir</a>
          </div>
          <div className={styles["progress-bar"]}>
            <div className={`${styles["progress-step"]} ${styles["active"]}`}></div>
            <div className={`${styles["progress-step"]} ${styles["active"]}`}></div>
            <div className={styles["progress-step"]}></div>
            <div className={styles["progress-step"]}></div>
            <div className={styles["progress-step"]}></div>
          </div>
        </div>
      </div>

      <div className={styles["section-title"]}>Pedidos anteriores</div>
      <div className={styles["orders-grid"]}>
        <div className={`${styles["order-card"]} ${styles["previous"]}`}>
          <div className={styles["order-header"]}>
            Orden #14256
            <span className={`${styles["status"]} ${styles["completed"]}`}>Completado</span>
          </div>
          <div className={styles["order-date"]}>
            <span className={styles["date-info"]}>
              <img src="/profile/orders/calendar.svg" alt="Calendario" />
              16 de septiembre, 2020
            </span>
            <span className={styles["time-info"]}>
              <img src="/profile/orders/clock.svg" alt="Reloj" />
              11:54 PM
            </span>
          </div>
          <div className={styles["order-items"]}>
            <div className={styles["item"]}>
              <span className={styles["quantity"]}>1</span> Pastel de queso
            </div>
            <div className={styles["item"]}>
              <span className={styles["quantity"]}>1</span> Dona de fresa
            </div>
          </div>
          <div className={styles["order-actions"]}>
            <button className={styles["details-btn"]}>Detalles</button>
            <button className={styles["help-btn"]}>Obtener ayuda</button>
          </div>
        </div>
        <div className={`${styles["order-card"]} ${styles["previous"]}`}>
          <div className={styles["order-header"]}>
            Orden #32561
            <span className={`${styles["status"]} ${styles["canceled"]}`}>Cancelado</span>
          </div>
          <div className={styles["order-date"]}>
            <span className={styles["date-info"]}>
              <img src="/profile/orders/calendar.svg" alt="Calendario" />
              29 de agosto, 2020
            </span>
            <span className={styles["time-info"]}>
              <img src="/profile/orders/clock.svg" alt="Reloj" />
              12:06 AM
            </span>
          </div>
          <div className={styles["order-items"]}>
            <div className={styles["item"]}>
              <span className={styles["quantity"]}>3</span> Cupcake de arándanos
            </div>
            <div className={styles["item"]}>
              <span className={styles["quantity"]}>1</span> Refresco tropical
            </div>
            <div className={`${styles["item-more"]} ${styles["dropdown"]}`}>
              <span>1 elemento más</span>
            </div>
          </div>
          <div className={styles["order-actions"]}>
            <button className={styles["details-btn"]}>Detalles</button>
            <button className={styles["help-btn"]}>Obtener ayuda</button>
          </div>
        </div>
      </div>
    </>
  );
}
