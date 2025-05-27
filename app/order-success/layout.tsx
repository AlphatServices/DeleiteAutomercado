"use client";
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

import { ReactNode } from 'react';

interface OrderSuccessLayoutProps {
  children: ReactNode;
}

export default function OrderSuccessLayout({ children }: OrderSuccessLayoutProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
