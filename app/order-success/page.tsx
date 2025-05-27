'use client';

import { useEffect, useState } from 'react';
import OrderSuccessComponent from './OrderSuccessComponent';

export default function OrderSuccessPage() {
  const [orderNumber, setOrderNumber] = useState<string>('');

  useEffect(() => {
    // Generar un número de orden aleatorio al cargar la página
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
    setOrderNumber(randomOrderNumber);
  }, []);

  // Solo renderizar el componente cuando tengamos un número de orden
  if (!orderNumber) {
    return null;
  }

  return <OrderSuccessComponent orderNumber={orderNumber} />;
}
