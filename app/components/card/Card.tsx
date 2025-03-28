import styles from "./Card.module.css";

function Card() {
  return (
    <a href="/product-info">
      <div className={styles["card"]}>
        <div className={styles["product-img"]}>
          <img src="/product-img-example/cheesecake.png" alt="" />
        </div>
        <div className={styles["product-info"]}>
          <h3 className={styles["product-title"]}>Chocolate Cheesecake</h3>
          <p className={styles["product-price"]}>$20.99</p>
          <div className={styles["product-points"]}>
            <p>
              ★★★★★ <span>(120)</span>{" "}
            </p>
          </div>
        </div>
        <div className={styles["product-add"]}>
          <img src="/card/shopping-cart.svg" alt="" />
        </div>
      </div>
    </a>
  );
}

export default Card;
