"use client";
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import styles from './Payment.module.css'

export default function page() {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <div className={styles["content_payment"]}>
                <div className={styles["payment_info"]}>
                    <h2 className={styles["payment_title"]}>Confirmar y pagar</h2>
                    <div className={styles["payment_divider"]}></div>
                    <div className={styles["payment_method_container"]}>
                        <p>Pagar con</p>
                        <div>
                            <a href="">Paypal</a>
                            <a className={styles["active"]}>Tarjeta de crédito</a>
                        </div>
                    </div>
                    <div className={styles["payment_divider"]}></div>
                    <div className={styles["payment_form_container"]}>
                        <p>Tarjeta de crédito</p>
                        <div className={styles["form"]}>
                            <div className={styles["input_group"]}>
                                <label htmlFor="card-number">Número de tarjeta</label>
                                <div className={styles["input_form"]}>
                                    <input type="text" id="card-number" placeholder="1234 5678 9012 3456" maxLength={19} />
                                    <span className={styles["check_icon"]}></span>
                                </div>
                            </div>

                            <div className={styles["input_group"]}>
                                <label htmlFor="card-holder">Titular de la tarjeta</label>
                                <div className={styles["input_form"]}>
                                    <input type="text" id="card-holder" placeholder="Nombre y Apellido" />
                                    <span className={styles["check_icon"]}></span>
                                </div>
                            </div>

                            <div className={styles["input_container"]}>
                                <div className={styles["input_group"]}>
                                    <label htmlFor="expiry-date">Fecha de vencimiento</label>
                                    <div className={styles["input_form"]}>
                                        <input type="text" id="expiry-date" placeholder="MM/YY" />
                                        <span className={styles["check_icon"]}></span>
                                    </div>
                                </div>

                                <div className={styles["input_group"]}>
                                    <label htmlFor="security-code">Código de seguridad</label>
                                    <div className={styles["input_form"]}>
                                        <input type="text" id="security-code" placeholder="CVV" />
                                        <span className={styles["check_icon"]}></span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles["save_card"]}>
                                <label className={styles["custom_checkbox"]}>
                                    <input type="checkbox" id="save-card" name="save-card" />
                                    <span className={styles["checkmark"]}></span>
                                    <span className={styles["label_text"]}>Guardar tarjeta</span>
                                </label>
                            </div>

                        </div>
                    </div>
                    <a href="/order-success" className={styles["payment_btn"]}>Confirmar y pagar</a>
                </div>
                <div className={styles["payment_price_details"]}>
                    <p>Detalles del precio</p>
                    <div className={styles["details"]}>
                        <div className={styles["detail"]}>
                            <p>Subtotal</p>
                            <p>$15.00</p>
                        </div>
                        <div className={styles["detail"]}>
                            <p>Descuento</p>
                            <p>-$2.00</p>
                        </div>
                        <div className={styles["detail"]}>
                            <p>Impuestos</p>
                            <p>$1.50</p>
                        </div>
                        <div className={styles["detail"]}>
                            <p>Envío</p>
                            <p>$2.50</p>
                        </div>
                        <div className={styles["detail"]}>
                            <p>Total</p>
                            <p>$17.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )
}
