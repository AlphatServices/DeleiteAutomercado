import { NextResponse } from 'next/server';

// Interfaz para la respuesta de la API del BCV
interface BCVRates {
  dollar: number;
  euro: number;
  lira: number;
  ruble: number;
  yuan: number;
}

export async function GET() {
  try {
    // Hacemos la solicitud al API del BCV desde el servidor
    const response = await fetch('https://bcv-api.rafnixg.dev/rates/', {
      cache: 'no-store', // No almacenar en caché para obtener siempre los datos más recientes
    });

    if (!response.ok) {
      throw new Error(`Error al obtener las tasas del BCV: ${response.status}`);
    }

    const data: BCVRates = await response.json();
    
    // Devolvemos los datos como respuesta de nuestra API
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error en la API de tasas del BCV:', error);
    return NextResponse.json(
      { error: 'Error al obtener las tasas del BCV' },
      { status: 500 }
    );
  }
}
