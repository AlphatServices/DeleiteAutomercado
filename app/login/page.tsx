"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../validation/schema-login";
import { z } from "zod";

import "./Login.css";

type FormData = z.infer<typeof schema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Datos enviados:", data);
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className="form-login">
            <div className="heading">
              <h2>¡Bienvenidos!</h2>
              <p>A Deleite Automercado</p>
            </div>
            <div className="login-input">
              <label htmlFor="user">Correo o Número de telefono</label>
              <input
                {...register("user")}
                id="user"
                type="text"
                placeholder="Escriba su correo o número de teléfono"
                autoComplete="user"
              />
              {errors.user && (
                <p className="helper-text">{errors.user.message}</p>
              )}
            </div>
            <div className="login-input">
              <label htmlFor="password">Contraseña</label>
              <input
                {...register("password")}
                id="password"
                type="password"
                placeholder="Escriba su contraseña"
                autoComplete="password"
              />
              {errors.password && (
                <p className="helper-text">{errors.password.message}</p>
              )}
              <p>
                <a className="forget" href="ruta-de-recuperacion.html">
                  ¿Olvidó su contraseña?
                </a>
              </p>
            </div>

            <a
              className="btn-form"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(onSubmit)();
              }}
            >
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
                No tiene una cuenta? <a href="/register">Registrate</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
