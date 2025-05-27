import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './about.module.css';

type AboutSectionProps = {
  title: string;
  children: ReactNode;
  reverse: boolean;
  image: string;
  imageAlt: string;
};

export default function AboutSection({ title, children, reverse, image, imageAlt }: AboutSectionProps) {
  return (
    <section className={styles.aboutSection}>
      <div className={`${styles.aboutContent} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.aboutText}>
          <h2>{title}</h2>
          {children}
        </div>
        <div className={styles.aboutImage}>
          <Image 
            src={image} 
            alt={imageAlt} 
            width={600} 
            height={450} 
            className={styles.aboutImageContent}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
