import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/navbar/LOGO.png" alt="Logo" />
      </div>
      <div className="search-container">
        <a href="#">DOLAR</a>
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
          <img src="/navbar/Line.svg" alt="Divider" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
