"use client";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Section from "../components/section/Section";
import Category from "../components/category/Category";
import DeliveryTracker from "../components/delivery-tracker/DeliveryTracker";
import api from "../utils/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import styles from "./Home.module.css";

import "swiper/swiper-bundle.css";

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  category_id: number;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products/all");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Card title={product.name} price={product.price} />
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
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Card title={product.name} price={product.price} />
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
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Card title={product.name} price={product.price} />
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
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Card title={product.name} price={product.price} />
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
