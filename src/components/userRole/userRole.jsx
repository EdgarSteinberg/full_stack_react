export const UserRole = () => {
    const token = getCookie("coderCookieToken");  // Obtener el token desde las cookies
    if (!token) return null; // No hay token, no autenticado
    const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decodifica el JWT
    return decodedToken.role; // Retorna el rol
};

// Función para obtener el valor de una cookie por su nombre
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};
