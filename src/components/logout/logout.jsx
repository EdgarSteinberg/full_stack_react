// import { Link } from 'react-router-dom';

// const Logout = () => {
//     const handleLogout = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/api/users/logout', {
//                 method: 'POST',
//                 credentials: 'include', // Asegúrate de incluir las cookies
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 alert(data.message); // Muestra el mensaje de logout exitoso
//                 window.location.href = '/login'; // Redirige al login
//             } else {
//                 console.error("Error al cerrar sesión");
//             }
//         } catch (error) {
//             console.error("Error en la solicitud de logout", error);
//         }
//     };

//     // Intercepta el clic del Link y ejecuta el logout
//     const handleLinkClick = (e) => {
//         e.preventDefault(); // Evita la navegación predeterminada del Link
//         handleLogout(); // Ejecuta la función de logout
//     };

//     return (
//         <div>
//             <Link to="/logout" onClick={handleLinkClick}>Cerrar sesión</Link>
//         </div>
//     );
// };

// export default Logout;
