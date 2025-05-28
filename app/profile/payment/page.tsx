import React from "react";
import styles from "./Payment.module.css"; // Asegúrate de tener este CSS Module creado

const Payment = () => {
  return (
    <div className={styles["pagos-contenedor"]}>
      <div className={styles["contenido-principal"]}>
        <div className={styles["encabezado"]}>
          <h2>Información de pago</h2>
        </div>

        <div className={styles["seccion"]}>
          <div className={styles["tarjeta-credito"]}>
            <h3>Tarjeta de crédito</h3>

            <div className={styles["tarjeta-display"]}>
              <div className={styles["tarjeta-info"]}>
                <div className={styles["tarjeta-tipo"]}>Visa •••••9999</div>
                <div className={styles["tarjeta-expiracion"]}>Expiración: 02/2024</div>
              </div>
              <button className={styles["btn-agregar-metodo"]}>
                Agregar método de pago
              </button>
            </div>
          </div>

          <div className={styles["formulario-tarjeta"]}>
            <div className={styles["titulo-tarjeta"]}>
              <h3>Agregar nueva tarjeta de crédito</h3>
              <div className={styles["tipos-tarjeta"]}>
                <img src="/profile/payment/visa.svg" alt="Visa" />
                <img src="/profile/payment/master.svg" alt="Mastercard" />
              </div>
            </div>

            <div className={styles["grupo-formulario"]}>
              <div className={styles["campo-formulario"]}>
                <label htmlFor="numero-tarjeta">NÚMERO DE TARJETA</label>
                <div className={styles["contenedor-numero-tarjeta"]}>
                  <input
                    type="text"
                    id="numero-tarjeta"
                    defaultValue="9224 0000 1111 3333"
                  />
                  <img
                    src="/profile/payment/check.svg"
                    className={styles["icono-verificacion"]}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles["campo-formulario"]}>
                <label htmlFor="titular-tarjeta">TITULAR DE LA TARJETA</label>
                <input
                  type="text"
                  id="titular-tarjeta"
                  defaultValue="PHAM TRAN LAN CAM NGOC"
                />
              </div>

              <div className={styles["fila-formulario"]}>
                <div className={styles["campo-formulario"]}>
                  <label htmlFor="fecha-expiracion">FECHA DE EXPIRACIÓN</label>
                  <input
                    type="text"
                    id="fecha-expiracion"
                    placeholder="MM / AA"
                  />
                </div>
                <div className={styles["campo-formulario"]}>
                  <label htmlFor="codigo-seguridad">CVC</label>
                  <input type="text" id="codigo-seguridad" />
                </div>
              </div>

              <div className={styles["contenedor-guardar-tarjeta"]}>
                <input
                  type="checkbox"
                  id="guardar-tarjeta"
                  className={styles["checkbox-guardar-tarjeta"]}
                />
                <label
                  htmlFor="guardar-tarjeta"
                  className={styles["etiqueta-guardar-tarjeta"]}
                >
                  Guardar tarjeta
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["seccion"]}>
          <h2>Cupones</h2>

          <div className={styles["contenedor-cupones"]}>
            <div className={styles["tipo-cupon"]}>
              <div>
                <div className={styles["info-cupon"]}>Cupones</div>
                <div className={styles["estado-cupon"]}>
                  No hay cupones agregados
                </div>
              </div>
              <div>
                <button className={styles["btn-agregar"]}>Agregar</button>
              </div>
            </div>

            <div className={styles["tipo-cupon"]}>
              <div>
                <div className={styles["info-cupon"]}>Crédito de regalo</div>
                <div className={styles["estado-cupon"]}>
                  No hay créditos agregados
                </div>
              </div>
              <div>
                <button className={styles["btn-agregar"]}>Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
