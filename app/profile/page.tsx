import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <>
      <div className={styles["header-container"]}>
        <h2>Información personal</h2>
        <button className={styles["view-profile-btn"]}>Ver perfil</button>
      </div>

      <div className={styles["profile-section"]}>
        <div className={styles["form-group"]}>
          <h2>Información de cuenta</h2>
          <div className={styles["form-row"]}>
            <div className={styles["form-field"]}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Ingrese tu nombre" />
            </div>
            <div className={styles["form-field"]}>
              <label htmlFor="last-name">Apellido</label>
              <input
                type="text"
                id="last-name"
                placeholder="Ingrese tu apellido"
              />
            </div>
          </div>

          <div className={`${styles["form-row"]} ${styles["full-width"]}`}>
            <div className={styles["form-field"]}>
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                type="text"
                id="username"
                placeholder="Ingrese tu nombre de usuario"
              />
            </div>
          </div>

          <div className={styles["form-row"]}>
            <div className={styles["form-field"]}>
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                placeholder="Ingrese tu número de teléfono"
              />
            </div>
            <div className={styles["form-field"]}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Ingrese tu email" />
            </div>
          </div>

          <div className={`${styles["form-row"]} ${styles["full-width"]}`}>
            <div className={styles["form-field"]}>
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                id="address"
                placeholder="Ingrese su dirección"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles["button-group"]}>
        <button className={styles["update-profile-btn"]}>Actualizar perfil</button>
        <a className={styles["clear-all-link"]}>Limpiar todo</a>
      </div>
    </>
  );
}
