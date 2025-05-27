import styles from './about.module.css';

type AboutHeaderProps = {
  title: string;
};

export default function AboutHeader({ title }: AboutHeaderProps) {
  return (
    <section className={styles.aboutHeader}>
      <h1>{title}</h1>
    </section>
  );
}
