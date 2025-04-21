"use client";
import styles from "./Navbar.module.css";
import { useModal } from "../../context/ModalContext";
import { getUserEmailFromToken } from "../../utils/get-user";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const { toggleDeliveryModal } = useModal();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [dollarRate, setDollarRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Ejecutar getUserEmailFromToken solo en el cliente
    const email = getUserEmailFromToken();
    setUserEmail(email);
  }, []);

  useEffect(() => {
    // Obtener el precio del dólar usando nuestra propia API
    setIsLoading(true);
    axios
      .get('/api/bcv-rates')
      .then((response) => {
        if (response.data && response.data.dollar) {
          setDollarRate(response.data.dollar);
        }
      })
      .catch((error) => {
        console.error('Error al obtener tasa del dólar:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <a href="/">
          <img src="/navbar/LOGO.png" alt="Logo" />
        </a>
      </div>
      <div className={styles["search-container"]}>
        <a className={styles["btn-navbar"]} style={{ whiteSpace: 'nowrap' }}>
          {/* <img src="/navbar/dollar.svg" alt="Dollar icon" /> */}
          {isLoading ? 'Cargando...' : dollarRate ? `Bs ${dollarRate.toFixed(2)}` : ''}
        </a>
        <div className={styles["divider"]} />
        <form className={styles["search-bar"]}>
          <img
            className={styles["search-icon"]}
            src="/navbar/Icon.svg"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Buscar..."
            className={styles["search-input"]}
          />
        </form>

        {userEmail ? (
          <div className={styles["right"]}>
            <a onClick={toggleDeliveryModal}>
              <img
                src="/navbar/delivery.svg"
                alt="Divider"
                width="24px"
                height="24px"
              />
            </a>
            <a
            // onClick={() => {
            //   localStorage.removeItem("token");
            //   console.log("Sesión cerrada");
            // }}
            >
              <img
                src="/navbar/shopping-cart.svg"
                alt="Shopping Cart"
                width="24px"
                height="24px"
              />
            </a>
            <a className={styles["profile"]} href="/profile">
              <img
                src="/navbar/user.svg"
                alt="Divider"
                width="24px"
                height="24px"
              />
              <p>{userEmail}</p>
            </a>
          </div>
        ) : (
          <div className={styles["right"]}>
            <a href="/login">
              <img
                src="/navbar/user.svg"
                alt="Divider"
                width="24px"
                height="24px"
              />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
