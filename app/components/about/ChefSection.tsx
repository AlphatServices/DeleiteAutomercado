import Image from 'next/image';
import styles from './about.module.css';

type Chef = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
};

type ChefCardProps = Omit<Chef, 'id'>;

function ChefCard({ name, role, description, image }: ChefCardProps) {
  return (
    <div className={styles.chefCard}>
      <div className={styles.chefImage}>
        <Image 
          src={image} 
          alt={name} 
          width={220} 
          height={160} 
          className={styles.chefImageContent}
        />
      </div>
      <div className={styles.chefInfo}>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <p className={styles.chefDescription}>{description}</p>
    </div>
  );
}

type ChefSectionProps = {
  title: string;
  subtitle: string;
  chefs: Chef[];
};

export default function ChefSection({ title, subtitle, chefs }: ChefSectionProps) {
  return (
    <section className={styles.aboutChefs}>
      <div className={styles.aboutChefsTitle}>
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
      <div className={styles.chefContainer}>
        {chefs.map(chef => (
          <ChefCard 
            key={chef.id}
            name={chef.name}
            role={chef.role}
            description={chef.description}
            image={chef.image}
          />
        ))}
      </div>
    </section>
  );
}
