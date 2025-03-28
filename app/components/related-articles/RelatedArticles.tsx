import styles from "./RelatedArticles.module.css";
import LargerWidthCard from "../larger-width card/LargerWidthCard";

function RelatedArticles() {
  return (
    <div className={styles["section-product"]}>
      <h2>Podría Gustarte</h2>
      <div className={styles["card-container"]}>
        <LargerWidthCard />
        <LargerWidthCard />
        <LargerWidthCard />
        <LargerWidthCard />
        <LargerWidthCard />
        <LargerWidthCard />
        <LargerWidthCard />
        <LargerWidthCard />
      </div>
    </div>
  );
}

export default RelatedArticles;
