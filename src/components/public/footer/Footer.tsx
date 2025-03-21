import "./Footer.css";

function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="#">sweetdeli@gmail.com</a>
            </li>
            <li>
              <a href="#">+1-2345-6789</a>
            </li>
            <li>
              <a href="#">Lechería, Anz Venezuela</a>
            </li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Productos</h4>
          <ul>
            <li>
              <a href="#">Destacados</a>
            </li>
            <li>
              <a href="#">Ofertas</a>
            </li>
            <li>
              <a href="#">Ferretería</a>
            </li>
            <li>
              <a href="#">Farmacia</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Sobre Nosotros</h4>
          <ul>
            <li>
              <a href="#">Egestas vitae.</a>
            </li>
            <li>
              <a href="#">Viverra lorem ac.</a>
            </li>
            <li>
              <a href="#">Eget ac tellus.</a>
            </li>
            <li>
              <a href="#">Erat nulla.</a>
            </li>
            <li>
              <a href="#">Vulputate proin.</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-logo">
          <img src="/navbar/LOGO.png" alt="" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="language-selector">
          <span>🌐 Español ▼</span>
        </div>
        <p>Copyright © 2025 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default footer;
