import styles from "./ProductInfo.module.css";

function ProductInfo() {
  return (
    <div className={styles["content-product"]}>
      <div className={styles["product-img"]}>
        <div>
          <img src="product-img-example/cheesecake.png" alt="" />
        </div>
      </div>
      <div className={styles["product-info"]}>
        <h2 className={styles["product-title"]}>Chocolate Cheesecake</h2>
        <p className={styles["product-price"]}>$20.99</p>

        <p className={styles["product-description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum
          suscipit vel nesciunt libero delectus beatae magnam commodi...
        </p>

        <div className={styles["details"]}>
          <div>
            <img className={styles["star"]} src="element-info/star.svg" />
            <span className={styles["product-rating"]}>
              <b>4.8</b> (1,873)
            </span>
          </div>
          <div>
            <img src="element-info/Silverware.svg" />
            <span className={styles["product-category"]}>Cake</span>
          </div>
        </div>

        <div className={styles["counter"]}>
          <a>
            <img src="btn-info/remove.svg" alt="" />
          </a>
          <span>1</span>
          <a>
            <img src="btn-info/add.svg" alt="" />
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
