"use client";
import styles from "./Navbar.module.css";
import { useModal } from "../../context/ModalContext";

const Navbar = () => {
  const { toggleDeliveryModal } = useModal();

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <a href="/">
          <img src="/navbar/LOGO.png" alt="Logo" />
        </a>
      </div>
      <div className={styles["search-container"]}>
        <a className={styles["btn-navbar"]}>
          <img src="navbar/dollar.svg" />
          DOLAR
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
          <a href="/login">
            <img
              src="/navbar/user.svg"
              alt="Divider"
              width="24px"
              height="24px"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
