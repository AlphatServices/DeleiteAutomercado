"use client";
import { useEffect, useState } from "react";
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import OrderSuccess from './page';

export default function OrderSuccessLayout() {
  const [orderNumber, setOrderNumber] = useState<string>("");

  useEffect(() => {
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
    setOrderNumber(randomOrderNumber);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {orderNumber && <OrderSuccess orderNumber={orderNumber} />}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
