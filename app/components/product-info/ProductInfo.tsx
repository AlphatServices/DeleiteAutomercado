"use client";
import { useState } from "react";
import styles from "./ProductInfo.module.css";

function ProductInfo({title,description,price,image}:any) {
  console.log(image)
  const [cantProduct, setCantProduct] = useState(1);

  const handleAddProduct = () => {
    setCantProduct(cantProduct + 1);
  }

  const handleRemoveProduct = () => {
    if (cantProduct > 1) {
      setCantProduct(cantProduct - 1);
    }
  }
  return (
    <div className={styles["content-product"]}>
      <div className={styles["product-img"]}>
        <div>
          <img src="../product-img-example/cheesecake.png" alt="" />
        </div>
      </div>
      <div className={styles["product-info"]}>
        <h2 className={styles["product-title"]}>{title}</h2>
        <p className={styles["product-price"]}>${price}</p>

        <p className={styles["product-description"]}>
          {description}
        </p>

        <div className={styles["details"]}>
          <div>
            <img className={styles["star"]} src="../element-info/star.svg" />
            <span className={styles["product-rating"]}>
              <b>4.8</b> (1,873)
            </span>
          </div>
          <div>
            <img src="../element-info/Silverware.svg" />
            <span className={styles["product-category"]}>Cake</span>
          </div>
        </div>

        <div className={styles["counter"]}>
          <a onClick={handleRemoveProduct}>
            <img src="../btn-info/remove.svg" alt="" />
          </a>
          <span>{cantProduct}</span>
          <a onClick={handleAddProduct}>
            <img src="../btn-info/add.svg" alt="" />
          </a>
        </div>

        <div className={styles["content-btn"]}>
          <a className={`${styles["btn-product"]} ${styles["buy-now"]}`}>
            Comprar ya
          </a>
          <a className={`${styles["btn-product"]} ${styles["add-cart"]}`}>
            Añadir al carro
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
