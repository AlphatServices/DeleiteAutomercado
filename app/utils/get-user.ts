// utils/auth.ts

// Definimos una interfaz para el payload del token
interface JwtPayload {
  email?: string;
  sub?: string;
  // Puedes añadir otras propiedades que esperes en el token
  [key: string]: any; // Para permitir otras propiedades no definidas
}

export const getUserEmailFromToken = (): string | null => {
  try {
    // 1. Obtener el token del localStorage
    const token = localStorage.getItem("token"); // o el nombre de tu clave

    if (!token) return null;

    // 2. Dividir el token y decodificar el payload
    const payloadBase64 = token.split(".")[1];

    // 3. Añadir relleno necesario para Base64 y decodificar
    const payloadJson = atob(
      payloadBase64.replace(/-/g, "+").replace(/_/g, "/")
    );
    const payload: JwtPayload = JSON.parse(payloadJson);

    // 4. Retornar el email (asumiendo que está en el payload)
    return payload.email || payload.sub || null;
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return null;
  }
};
