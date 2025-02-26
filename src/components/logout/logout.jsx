import NavBar from "../navBar/navBar";


const Logout = () => {
    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/users/logout', {
                method: 'POST',
                credentials: 'include', // Importante para manejar cookies
            });
    
            if (response.ok) {
                alert("Logout exitoso");
              //  window.location.href = "/login"; // Redirigir al login o página de inicio
            } else {
                console.error("Error al cerrar sesión");
            }
        } catch (error) {
            console.error("Error en la solicitud de logout", error);
        }
    };
    return(
        <>
            <NavBar handleLogout={handleLogout}/>
        </>
    )
}

export default Logout