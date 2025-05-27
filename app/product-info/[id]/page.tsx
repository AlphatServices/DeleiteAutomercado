"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductInfo from "../../components/product-info/ProductInfo";
import SectionProduct from "../../components/section-product/SectionProduct";
import RelatedArticles from "../../components/related-articles/RelatedArticles";
import { Product } from '@/app/home/Home.interfaces';
import api from '@/app/utils/api';


function ProductInfoPage() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`products/api-products-inventory-wis-id/${id}`);
        setProduct(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } 
    };
    fetchProduct();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ProductInfo 
          productID={product[0]?.productID}
          title={product[0]?.description} 
          description={product[0]?.fullDescription} 
          price={product[0]?.productStock.costPurchase} 
          image={product[0]?.imageUrl}
          />
        <SectionProduct />
        <RelatedArticles />
      </main>
      <Footer />
    </>
  );
}

export default ProductInfoPage;
