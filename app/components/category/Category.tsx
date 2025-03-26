import styles from "./Category.module.css";

interface MyCategoryProps {
  title: string;
}

function Category({ title }: MyCategoryProps) {
  return (
    <div className={styles["circle-item"]}>
      <div className={styles["circle"]}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Category;
