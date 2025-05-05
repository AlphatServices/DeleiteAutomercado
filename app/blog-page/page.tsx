"use client";
import BlogPage from './BlogPage';
import { RelatedArticle } from './BlogPage';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

// Datos de ejemplo para el blog
const blogData = {
  title: "Harina de Maíz PAN: El corazón de la cocina venezolana",
  date: "30 Abr 2025",
  author: "Carlos Rodríguez",
  content: [
    "La Harina de Maíz PAN es mucho más que un simple ingrediente en Venezuela; es un símbolo cultural que ha transformado la gastronomía del país desde su creación en 1960. Este producto precocido revolucionó la forma de preparar las tradicionales arepas, convirtiéndolas en un plato accesible para todos los hogares venezolanos.",
    "Elaborada a partir de maíz blanco de alta calidad, la Harina PAN se somete a un proceso de precocción que permite conservar sus nutrientes esenciales mientras facilita enormemente su preparación. Este proceso innovador, desarrollado por Empresas Polar, permitió que la elaboración de arepas pasara de ser un proceso laborioso que tomaba horas a una tarea sencilla que cualquiera puede realizar en minutos.",
    "Su impacto ha trascendido fronteras. Con la diáspora venezolana, la Harina PAN ha llegado a numerosos países donde se ha convertido en un ingrediente apreciado no solo por los expatriados sino también por los locales que descubren nuevas posibilidades culinarias. Hoy en día, se utiliza para preparar desde las clásicas arepas hasta empanadas, hallacas, bollos pelones y diversas recetas que mantienen viva la tradición culinaria venezolana en todo el mundo, representando un puente cultural y emocional para millones de personas."
  ],
  mainImage: {
    src: "https://mandolina.co/wp-content/uploads/2024/05/arepas-ven-1.jpg",
    alt: "Arepas venezolanas hechas con Harina PAN"
  }
};

// Datos de ejemplo para los artículos relacionados
const relatedArticles: RelatedArticle[] = [
  {
    id: 1,
    title: "Hay muchas razones para comenzar",
    excerpt: "El único momento, la única vida que tenemos está en el AHORA. Lo que pasó hace unos momentos o hace varios años ya se fue.",
    image: {
      src: "/blog/nofound.png",
      alt: "Arepas rellenas"
    },
    date: "10 Oct 21",
    author: "Jane Ostin"
  },
  {
    id: 2,
    title: "Hay muchas razones para comenzar",
    excerpt: "El único momento, la única vida que tenemos está en el AHORA. Lo que pasó hace unos momentos o hace varios años ya se fue.",
    image: {
      src: "/blog/nofound.png",
      alt: "Empanadas venezolanas"
    },
    date: "10 Oct 21",
    author: "Jane Ostin"
  },
  {
    id: 3,
    title: "Hay muchas razones para comenzar",
    excerpt: "El único momento, la única vida que tenemos está en el AHORA. Lo que pasó hace unos momentos o hace varios años ya se fue.",
    image: {
      src: "/blog/nofound.png",
      alt: "Arepas rellenas"
    },
    date: "10 Oct 21",
    author: "Jane Ostin"
  },
  {
    id: 4,
    title: "Hay muchas razones para comenzar",
    excerpt: "El único momento, la única vida que tenemos está en el AHORA. Lo que pasó hace unos momentos o hace varios años ya se fue.",
    image: {
      src: "/blog/nofound.png",
      alt: "Empanadas venezolanas"
    },
    date: "10 Oct 21",
    author: "Jane Ostin"
  },
  {
    id: 5,
    title: "Hay muchas razones para comenzar",
    excerpt: "El único momento, la única vida que tenemos está en el AHORA. Lo que pasó hace unos momentos o hace varios años ya se fue.",
    image: {
      src: "/blog/nofound.png",
      alt: "Arepas rellenas"
    },
    date: "10 Oct 21",
    author: "Jane Ostin"
  },
  {
    id: 6,
    title: "Hay muchas razones para comenzar",
    excerpt: "El único momento, la única vida que tenemos está en el AHORA. Lo que pasó hace unos momentos o hace varios años ya se fue.",
    image: {
      src: "/blog/nofound.png",
      alt: "Empanadas venezolanas"
    },
    date: "10 Oct 21",
    author: "Jane Ostin"
  }
];

const Blog = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BlogPage 
          title={blogData.title}
          date={blogData.date}
          author={blogData.author}
          content={blogData.content}
          mainImage={blogData.mainImage}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
