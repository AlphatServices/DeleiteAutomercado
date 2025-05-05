import styles from './BlogPage.module.css';
import RelatedArticleCard from './RelatedArticleCard';

// Definición de tipos
interface BlogPageProps {
  title: string;
  date: string;
  author: string;
  content: string[];
  mainImage: {
    src: string;
    alt: string;
  };
  relatedArticles: RelatedArticle[];
}

export interface RelatedArticle {
  id: number;
  title: string;
  excerpt: string;
  image: {
    src: string;
    alt: string;
  };
  date: string;
  author: string;
}

const BlogPage: React.FC<BlogPageProps> = ({
  title,
  date,
  author,
  content,
  mainImage,
  relatedArticles
}) => {
  return (
    <main className={styles.main}>
      {/* Info Producto */}
      <div className={styles.content}>
        <div className={styles.blog_head}>
          <h2>{title}</h2>
          <span>{date}, por {author}</span>
        </div>
        <div className={styles.blog_body}>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <img src={mainImage.src} alt={mainImage.alt} />
        </div>
      </div>

      <div className={styles.content}>
        <h2>Artículos Recomendados</h2>
        <div className={styles.articles_container}>
          {relatedArticles.map((article) => (
            <RelatedArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
