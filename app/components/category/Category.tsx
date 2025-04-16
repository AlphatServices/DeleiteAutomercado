import Image from "next/image";
import styles from "./Category.module.css";

interface MyCategoryProps {
  title: string;
  image?: string; // Prop opcional para la imagen
}

function Category({ title, image }: MyCategoryProps) {
  // Si se proporciona una imagen directamente, la usamos
  // Si no, usamos el path por defecto basado en el título
  const imagePath = image ? image : `/category/${title}.png`;

  return (
    <div className={styles["circle-item"]}>
      <div className={styles["circle"]}>
        <Image 
          src={imagePath}
          alt={title}
          width={100}
          height={100}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Category;
