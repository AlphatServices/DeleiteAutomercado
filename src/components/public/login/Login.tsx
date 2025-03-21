import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="login-container">
        <div className="content-aside">
          <div className="logo-login">
            <img src="/navbar/LOGO.png" alt="" />
          </div>
          <div className="aside-text">
            <h2>¡Deleitate comprando!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              ut laoreet velit ma.
            </p>
          </div>
        </div>
        <div className="content-form">
          <form className="form-login" action="">
            <div className="heading">
              <h2>¡Bienvenidos!</h2>
              <p>A Deleite Automercado</p>
            </div>
            <div className="login-input">
              <label htmlFor="email">Correo o Número de telefono</label>
              <input
                id="email"
                autoComplete="email"
                type="text"
                placeholder="Escriba su correo o número de teléfono"
              />
            </div>
            <div className="login-input">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                placeholder="Escriba su contraseña"
              />
              <p>
                <a className="forget" href="ruta-de-recuperacion.html">
                  ¿Olvidó su contraseña?
                </a>
              </p>
            </div>

            <a className="btn-login" href="">
              Ingresar
            </a>
            <div className="social">
              <div className="separator">
                <hr />
                <span>Desea ingresar con</span>
                <hr />
              </div>
              <div className="content-social">
                <div>
                  <img src="/icon/google-icon.svg" alt="" />
                </div>
                <div>
                  <img src="/icon/apple-icon.svg" alt="" />
                </div>
                <div>
                  <img src="/icon/facebook-icon.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="label">
              <p>
                No tiene una cuenta?{" "}
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault(); // Evita la recarga de la página
                    navigate("/register");
                  }}
                >
                  Registrate
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
