

// Función para obtener el valor de una cookie por su nombre
const getCookie = (name) => {
    const value = `; ${document.cookie}`; // Aseguramos que empiece con un "; "
    const parts = value.split(`; ${name}=`); // Buscamos el nombre de la cookie
    if (parts.length === 2) return parts.pop().split(';').shift(); // Si existe la cookie, extraemos su valor
    return null; // Si no existe, devolvemos null
};

// Ejemplo de uso
const token = getCookie('coderCookieToken');
console.log("Valor de la cookie 'coderCookieToken':", token);

export const UserRole = () => {
    const token = getCookie("coderCookieToken");  // Obtener el token desde las cookies
    console.log("🔹 Token desde la cookie:", token);

    if (!token) {
        console.log("❌ No se encontró el token en las cookies");
        return null;
    }

    try {
        const base64Payload = token.split('.')[1]; // Obtener la parte útil del token
        console.log("🔹 Base64 Payload:", base64Payload);

        const decodedPayload = atob(base64Payload);
        console.log("🔹 Payload Decodificado:", decodedPayload);

        const decodedToken = JSON.parse(decodedPayload);
        console.log("✅ Token decodificado en UserRole:", decodedToken);

        return { 
            role: decodedToken.role,   
            userId: decodedToken._id  
        };
    } catch (error) {
        console.error("❌ Error al decodificar el token:", error);
        return null;
    }
};
