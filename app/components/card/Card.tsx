import styles from "./Card.module.css";

interface MyCategoryProps {
  id: number;
  title: string;
  price: number;
}

function Card({ id, title, price }: MyCategoryProps) {
  return (
    <a href={`/product-info/${id}`}>
      <div className={styles["card"]}>
        <div className={styles["product-img"]}>
          <img src="/product-img-example/cheesecake.png" alt="" />
        </div>
        <div className={styles["product-info"]}>
          <h3 className={styles["product-title"]}>{title}</h3>
          <p className={styles["product-price"]}>${price}</p>
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
