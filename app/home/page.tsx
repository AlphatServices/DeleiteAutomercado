"use client";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Section from "../components/section/Section";
import Category from "../components/category/Category";
import DeliveryTracker from "../components/delivery-tracker/DeliveryTracker";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect } from "react";

import styles from "./Home.module.css";

import "swiper/swiper-bundle.css";

const Home = () => {
  const slides = Array.from({ length: 12 }, (_, index) => index); // Genera un array con 12 elementos

  useEffect(() => {
    const token = localStorage.getItem("token"); // Solo se ejecuta en el cliente
    token ? console.log("Usuario autenticado") : console.log("No autenticado");
  }, []);

  return (
    <>
      <header>
        <Navbar />
        <div className={styles["hero"]} />
      </header>
      <main>
        <Section title="Categorias">
          <Category title="Viveres" />
          <Category title="Congelados & Refrigerados" />
          <Category title="Frutas & Vegetales" />
          <Category title="Herramientas" />
          <Category title="Bebidas" />
          <Category title="Panadería" />
          <Category title="Salud" />
          <Category title="Postres" />
          <Category title="Ofertas" />
        </Section>
        <Section title="Los más vendidos" subtitle="Popular">
          {/* <button className="custom-prev">⬅</button> */}
          <Swiper
            // navigation={{
            //   prevEl: ".custom-prev", // Clase personalizada
            // }}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {slides.map((_, index) => (
              <SwiperSlide key={index}>
                <Card />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
        <div className={`${styles["banner"]} ${styles["ban1"]}`} />
        <Section title="Los más vendidos" subtitle="Popular">
          <Swiper
            // navigation={{
            //   prevEl: ".custom-prev", // Clase personalizada
            // }}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {slides.map((_, index) => (
              <SwiperSlide key={index}>
                <Card />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
        <div className={`${styles["banner"]} ${styles["ban2"]}`} />
        <Section title="Los más vendidos" subtitle="Popular">
          <Swiper
            // navigation={{
            //   prevEl: ".custom-prev", // Clase personalizada
            // }}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {slides.map((_, index) => (
              <SwiperSlide key={index}>
                <Card />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
        <div className={`${styles["banner"]} ${styles["ban3"]}`} />
        <Section title="Los más vendidos" subtitle="Popular">
          <Swiper
            // navigation={{
            //   prevEl: ".custom-prev", // Clase personalizada
            // }}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {slides.map((_, index) => (
              <SwiperSlide key={index}>
                <Card />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      </main>
      <Footer />
      <DeliveryTracker />
    </>
  );
};

export default Home;
