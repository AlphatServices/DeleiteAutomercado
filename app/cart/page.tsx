"use client";
import styles from "./Cart.module.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Cart() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className={styles["content-payment"]}>
        <div className={styles["cart-container"]}>
          <h2 className={styles["cart-title"]}>
            Carrito <span>3</span>
          </h2>

          <div className={styles["cart-table"]}>
            <div className={styles["cart-header"]}>
              <div className={styles["cart-item-header"]}>Artículo</div>
              <div className={styles["cart-price-header"]}>Precio</div>
              <div className={styles["cart-quantity-header"]}>Cantidad</div>
              <div className={styles["cart-total-header"]}>Precio Total</div>
            </div>

            <div className={styles["cart-items"]}>
              <div className={styles["cart-item"]}>
                <div className={styles["cart-item-info"]}>
                  <div className={styles["cart-item-image"]}>
                    <img src="/cart/placeholder.svg" alt="Imagen del producto" />
                  </div>
                  <div className={styles["cart-item-details"]}>
                    <h3>Vel pellentesque bibendum.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={styles["cart-item-price"]}>$33.9</div>
                <div className={styles["cart-item-quantity"]}>
                  <a className={`${styles["quantity-btn"]} ${styles["decrease"]}`}>
                    <img src="/cart/remove.svg" alt="-" />
                  </a>
                  <span className={styles["quantity-value"]}>1</span>
                  <a className={`${styles["quantity-btn"]} ${styles["increase"]}`}>
                    <img src="/cart/add.svg" alt="+" />
                  </a>
                </div>
                <div className={styles["cart-item-total"]}>$33.90</div>
                <div className={styles["cart-item-actions"]}>
                  <a className={styles["favorite-btn"]}>
                    <img src="/cart/heart-outline.svg" alt="Favorito" />
                  </a>
                  <a className={styles["remove-btn"]}>
                    <img src="/cart/close.svg" alt="Eliminar" />
                  </a>
                </div>
              </div>
              <div className={styles["cart-item"]}>
                <div className={styles["cart-item-info"]}>
                  <div className={styles["cart-item-image"]}>
                    <img src="/cart/placeholder.svg" alt="Imagen del producto" />
                  </div>
                  <div className={styles["cart-item-details"]}>
                    <h3>Magna quis at non</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Libero.
                    </p>
                  </div>
                </div>
                <div className={styles["cart-item-price"]}>$14.9</div>
                <div className={styles["cart-item-quantity"]}>
                  <a className={`${styles["quantity-btn"]} ${styles["decrease"]}`}>
                    <img src="/cart/remove.svg" alt="-" />
                  </a>
                  <span className={styles["quantity-value"]}>1</span>
                  <a className={`${styles["quantity-btn"]} ${styles["increase"]}`}>
                    <img src="/cart/add.svg" alt="+" />
                  </a>
                </div>
                <div className={styles["cart-item-total"]}>$14.90</div>
                <div className={styles["cart-item-actions"]}>
                  <a className={styles["favorite-btn"]}>
                    <img src="/cart/heart-outline.svg" alt="Favorito" />
                  </a>
                  <a className={styles["remove-btn"]}>
                    <img src="/cart/close.svg" alt="Eliminar" />
                  </a>
                </div>
              </div>

              <div className={styles["cart-item"]}>
                <div className={styles["cart-item-info"]}>
                  <div className={styles["cart-item-image"]}>
                    <img src="/cart/placeholder.svg" alt="Imagen del producto" />
                  </div>
                  <div className={styles["cart-item-details"]}>
                    <h3>Cursus tortor ac eget</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={styles["cart-item-price"]}>$16.9</div>
                <div className={styles["cart-item-quantity"]}>
                  <a className={`${styles["quantity-btn"]} ${styles["decrease"]}`}>
                    <img src="/cart/remove.svg" alt="-" />
                  </a>
                  <span className={styles["quantity-value"]}>1</span>
                  <a className={`${styles["quantity-btn"]} ${styles["increase"]}`}>
                    <img src="/cart/add.svg" alt="+" />
                  </a>
                </div>
                <div className={styles["cart-item-total"]}>$16.90</div>
                <div className={styles["cart-item-actions"]}>
                  <a className={styles["favorite-btn"]}>
                    <img src="/cart/heart-outline.svg" alt="Favorito" />
                  </a>
                  <a className={styles["remove-btn"]}>
                    <img src="/cart/close.svg" alt="Eliminar" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["cart-checkout-grid"]}>
            <div className={styles["checkout-item"]}>
              <div className={styles["promocode-container"]}>
                <label htmlFor="promocode">Código Promocional</label>
                <div className={styles["promocode-input"]}>
                  <input type="text" id="promocode" value="HAPPY" readOnly />
                  <span className={styles["promocode-check"]}>
                    <img src="/cart/checkmark.svg" alt="Applied" />
                  </span>
                </div>
                <p className={styles["promocode-message"]}>
                  ¡Felicidades! Tienes un 10% de descuento
                </p>
              </div>
            </div>

            <div className={styles["checkout-item"]}>
              <div className={styles["discount-row"]}>
                <span>Descuento:</span>
                <span className={styles["value"]}>$7.66</span>
              </div>
            </div>

            <div className={styles["checkout-item"]}></div>

            <div className={styles["divider"]}></div>

            <div className={styles["checkout-item"]}>
              <a href="/" className={styles["back-btn"]}>
                ⟵ Volver a comprar
              </a>
            </div>
            <div className={styles["checkout-item"]}>
              <div className={styles["total-row"]}>
                <span>Precio Total:</span>
                <span className={styles["value"]}>$68.94</span>
              </div>
            </div>
            <div className={styles["checkout-item"]}>
              <a href="/payment" className={styles["checkout-btn"]}>Finalizar Compra</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
