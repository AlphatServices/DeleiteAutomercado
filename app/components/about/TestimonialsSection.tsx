import Image from 'next/image';
import styles from './about.module.css';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
};

type RatingStarsProps = {
  rating: number;
};

function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, index) => (
        <span 
          key={index} 
          className={index < rating ? styles.filledStar : styles.emptyStar}
        >
          ★
        </span>
      ))}
    </div>
  );
}

type TestimonialCardProps = Omit<Testimonial, 'id'>;

function TestimonialCard({ name, role, rating, text, image }: TestimonialCardProps) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialImage}>
        <Image 
          src={image} 
          alt={name} 
          width={220} 
          height={160} 
          className={styles.testimonialImageContent}
        />
      </div>
      <div className={styles.testimonialInfo}>
        <RatingStars rating={rating} />
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <p className={styles.testimonialDescription}>{text}</p>
    </div>
  );
}

type TestimonialsSectionProps = {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
};

export default function TestimonialsSection({ title, subtitle, testimonials }: TestimonialsSectionProps) {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsHeader}>
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
      <div className={styles.testimonialsContainer}>
        {testimonials.map(testimonial => (
          <TestimonialCard 
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            rating={testimonial.rating}
            text={testimonial.text}
            image={testimonial.image}
          />
        ))}
      </div>
    </section>
  );
}
