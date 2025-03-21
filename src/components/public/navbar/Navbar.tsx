import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/navbar/LOGO.png" alt="Logo" />
      </div>
      <div className="search-container">
        <a className="btn-navbar" href="#">
          DOLAR
        </a>
        <div className="divider"></div>
        <form className="search-bar">
          <img
            className="search-icon"
            src="/navbar/Icon.svg"
            alt="Search Icon"
          />
          <input type="text" placeholder="Buscar..." className="search-input" />
        </form>
        <div className="right">
          <img src="/navbar/shopping-cart.svg" alt="Shopping Cart" />
          <a
            href=""
            onClick={(e) => {
              e.preventDefault(); // Evita la recarga de la página
              navigate("/login");
            }}
          >
            <img src="/navbar/Line.svg" alt="Divider" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
