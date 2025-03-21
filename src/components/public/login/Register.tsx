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
              <h2>Crea tu cuenta</h2>
              <p>Fácil y rápido</p>
            </div>
            <div className="login-input">
              <label htmlFor="email">Nombre</label>
              <input
                id="email"
                autoComplete="email"
                type="text"
                placeholder="Escriba su nombre"
              />
            </div>
            <div className="login-input">
              <label htmlFor="email">Correo o número de teléfono</label>
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
                <a className="helper-text" href="ruta-de-recuperacion.html">
                  Debe contener mínimo 8 carácteres
                </a>
              </p>
            </div>

            <div>
              <label className="checkbox-container">
                <input type="checkbox" />
                <div>
                  He leído los <a href="hola">Términos y Condiciones</a>, y la{" "}
                  <a href="adios">Política de Privacidad</a>
                </div>
              </label>
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
                Ya tienes una cuenta?{" "}
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault(); // Evita la recarga de la página
                    navigate("/login");
                  }}
                >
                  Ingresar
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
