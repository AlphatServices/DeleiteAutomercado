import { ReactNode } from "react";
import styles from "./Section.module.css";

interface MySectionProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

function Section({ children, title, subtitle }: MySectionProps) {
  return (
    <div className={styles["section"]}>
      {subtitle && <h3>{subtitle}</h3>}
      <h2>{title}</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {children}
      </div>
    </div>
  );
}

export default Section;
