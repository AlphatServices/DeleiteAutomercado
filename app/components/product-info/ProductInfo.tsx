"use client";
import { useState } from "react";
import styles from "./ProductInfo.module.css";
import { addCart } from "@/app/utils/addCart";

function ProductInfo({productID,title,description,price,image}:any) {
  const [cantProduct, setCantProduct] = useState(1);

  const handleAddCantProduct = () => {
    setCantProduct(cantProduct + 1);
  }

  const handleRemoveCantProduct = () => {
    if (cantProduct > 1) {
      setCantProduct(cantProduct - 1);
    }
  }

  const handleAddCart=(productID:number,cantProduct:number,price:number)=>{
    console.log(productID);
    console.log(cantProduct);
    const resp = addCart(productID,cantProduct,price);
    console.log('handleAddCart', resp)
    
  }

  /** -------------------------------------------------------------------------------------------- */
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
          <a onClick={handleRemoveCantProduct}>
            <img src="../btn-info/remove.svg" alt="" />
          </a>
          <span>{cantProduct}</span>
          <a onClick={handleAddCantProduct}>
            <img src="../btn-info/add.svg" alt="" />
          </a>
        </div>

        <div className={styles["content-btn"]}>
          <a className={`${styles["btn-product"]} ${styles["buy-now"]}`}>
            Comprar ya
          </a>
          <a onClick={()=> handleAddCart(productID,cantProduct,price)}  className={`${styles["btn-product"]} ${styles["add-cart"]}`}>
            Añadir al carro
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
