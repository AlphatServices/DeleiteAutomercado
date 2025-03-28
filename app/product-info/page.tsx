import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ProductInfo from "../components/product-info/ProductInfo";
import SectionProduct from "../components/section-product/SectionProduct";
import RelatedArticles from "../components/related-articles/RelatedArticles";

function ProductInfoPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ProductInfo />
        <SectionProduct />
        <RelatedArticles />
      </main>
      <Footer />
    </>
  );
}

export default ProductInfoPage;
