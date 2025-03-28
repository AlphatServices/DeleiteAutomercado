import styles from "./Navbar.module.css";

const Navbar = () => {
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
          <img src="/navbar/shopping-cart.svg" alt="Shopping Cart" />
          <a href="/login">
            <img src="/navbar/Line.svg" alt="Divider" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
