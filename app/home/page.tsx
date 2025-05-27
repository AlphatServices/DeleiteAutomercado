"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Section from "../components/section/Section";
import Category from "../components/category/Category";
import DeliveryTracker from "../components/delivery-tracker/DeliveryTracker";
import api from "../utils/api";
import { Product, Categorys} from "./Home.interfaces";
import styles from "./Home.module.css";
import "swiper/swiper-bundle.css";


const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsFarmacia, setProductsFarmacia] = useState<Product[]>([]);
  const [productsFerreteria, setProductsFerreteria] = useState<Product[]>([]);
  const [productsViveres, setProductsViveres] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Categorys[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.patch("/categories/searchCategoriesApi/26",{Page:1});
        setProducts(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchProductsFarmacia = async () => {
      try {
        const res = await api.patch("/categories/searchCategoriesApi/12",{Page:1});
        setProductsFarmacia(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchProductsFerreteria = async () => {
      try {
        const res = await api.patch("/categories/searchCategoriesApi/13",{Page:1});
        setProductsFerreteria(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchProductsViveres = async () => {
      try {
        const res = await api.patch("/categories/searchCategoriesApi/29",{Page:1});
        setProductsViveres(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories/allCategoriesApi");
       setCategories(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
    fetchProducts();
    fetchProductsFarmacia();
    fetchProductsFerreteria();
    fetchProductsViveres();
  }, []);

  return (
    <>
      <header>
        <Navbar />
        <div className={styles["hero"]} />
      </header>
      <main>
        <Section title="Categorias">
          <Swiper
             navigation={{
               prevEl: ".custom-prev", // Clase personalizada
             }}
            slidesPerView={9}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Category title={category.name} image={category.image} />
            </SwiperSlide>
            ))}
          </Swiper>
        </Section>
        <Section title="Los más vendidos" subtitle="Popular">
          {/* <button className="custom-prev">⬅</button>  */}
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
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Card id={product.productID} title={product.description} price={product.productStock.costPurchase} />
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
            {productsViveres.map((product, index) => (
              <SwiperSlide key={index}>
                <Card id={product.productID} title={product.description} price={product.productStock.costPurchase} />
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
            {productsFerreteria.map((product, index) => (
              <SwiperSlide key={index}>
                <Card id={product.productID} title={product.description} price={product.productStock.costPurchase} />
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
            {productsFarmacia.map((product, index) => (
              <SwiperSlide key={index}>
                <Card id={product.productID} title={product.description} price={product.productStock.costPurchase} />
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
