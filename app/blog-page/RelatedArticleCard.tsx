import styles from './BlogPage.module.css';
import { RelatedArticle } from './BlogPage';

interface RelatedArticleCardProps {
  article: RelatedArticle;
}

const RelatedArticleCard: React.FC<RelatedArticleCardProps> = ({ article }) => {
  return (
    <div className={styles.article_card}>
      <div className={styles.article_img}>
        <img src={article.image.src} alt={article.image.alt} />
      </div>
      <div className={styles.article_info}>
        <h3 className={styles.article_title}>{article.title}</h3>
        <p className={styles.article_excerpt}>{article.excerpt}</p>
        <div className={styles.article_meta}>
          <img src="/blog/Mask.svg" alt="heart icon" />
          <span className={styles.article_date}>{article.date}, por {article.author}</span>
          <a href="#" className={styles.read_more}>LEER MÁS</a>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticleCard;
