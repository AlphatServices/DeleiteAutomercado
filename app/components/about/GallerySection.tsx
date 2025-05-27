import Image from 'next/image';
import styles from './about.module.css';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

type GallerySectionProps = {
  images: GalleryImage[];
};

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    <section className={styles.gallerySection}>
      {images.map(image => (
        <div key={image.id} className={styles.galleryImage}>
          <Image 
            src={image.src} 
            alt={image.alt} 
            width={300} 
            height={300} 
            className={styles.galleryImageContent}
          />
        </div>
      ))}
    </section>
  );
}
