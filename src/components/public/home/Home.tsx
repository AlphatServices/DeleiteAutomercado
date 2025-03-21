import Navbar from "../navbar/Navbar";
import Section from "./section/Section";
import Card from "./card/Card";
import Category from "./category/Category";
import Footer from "../footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// import Swiper and modules styles
import "swiper/swiper-bundle.css";

import "./Home.css";

const Home = () => {
  const slides = Array.from({ length: 12 }, (_, index) => index); // Genera un array con 12 elementos

  return (
    <>
      <header>
        <Navbar />
        <div className="hero" />
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
            navigation={{
              prevEl: ".custom-prev", // Clase personalizada
            }}
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
        <div className="banner ban1" />
        <Section title="Destacadas" subtitle="Ofertas">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
        <div className="banner ban2" />
        <Section title="Los más vendidos" subtitle="Popular">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
        <div className="banner ban3" />
        <Section title="Los más vendidos" subtitle="Popular">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
