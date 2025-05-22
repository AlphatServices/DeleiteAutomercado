"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../validation/schema-register";
import { z } from "zod";
import axios from "axios";

import "../login/Login.css";
import { useState } from "react";

type FormData = z.infer<typeof schema>;

function Register() {
  const [errorBack, setErrorBack] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Datos enviados:", data);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        data
      );
      console.log(response);
    } catch (error: any) {
      setErrorBack(error.response.data.message);
      console.error("Error al registrar:", error);
    }
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
              <h2>Crea tu cuenta</h2>
              <p>Fácil y rápido</p>
            </div>
            <div className="login-input">
              <label htmlFor="name">Nombre</label>
              <input
                {...register("name")}
                id="name"
                autoComplete="name"
                type="text"
                placeholder="Escriba su nombre"
              />
              {errors.name && (
                <p className="helper-text">{errors.name.message}</p>
              )}
            </div>
            <div className="login-input">
              <label htmlFor="email">Correo o número de teléfono</label>
              <input
                {...register("email")}
                id="email"
                autoComplete="email"
                type="text"
                placeholder="Escriba su correo o número de teléfono"
              />
              {errors.email && (
                <p className="helper-text">{errors.email.message}</p>
              )}
            </div>
            <div className="login-input">
              <label htmlFor="password">Contraseña</label>
              <input
                {...register("password")}
                id="password"
                type="password"
                placeholder="Escriba su contraseña"
              />
              {errors.password && (
                <p className="helper-text">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label className="checkbox-container">
                <input type="checkbox" {...register("termins")} />
                <div>
                  He leído los <a href="">Términos y Condiciones</a>, y la{" "}
                  <a href="">Política de Privacidad</a>
                </div>
              </label>
              {errors.termins && (
                <p className="helper-text">{errors.termins.message}</p>
              )}
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
                <p className="helper-text">{errorBack}</p>
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
                Ya tienes una cuenta? <a href="/login">Ingresar</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
