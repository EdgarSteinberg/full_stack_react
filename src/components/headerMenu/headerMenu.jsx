import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useEffect } from "react";
import HeaderItem from "./headerItem";

const handleLogout = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/users/logout", {
            method: "POST",
            credentials: "include",
        });

        if (response.ok) {
            await response.json();
            window.location.href = '/login';
        } else {
            console.error("Error al cerrar sesión");
        }
    } catch (error) {
        console.error("Error en la solicitud de logout", error);
    }
};

const handleLinkClick = (e) => {
    e.preventDefault();
    handleLogout();
};

const HeaderMenu = () => {
    const { profile, cart ,setCart} = useContext(CartContext);
    
    // Calcular la cantidad total de productos en el carrito
    const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);

     // Si el carrito está vacío, actualizar localStorage y el contexto
     useEffect(() => {
        if (totalQuantity === 0) {
            // Vaciar el carrito en localStorage
            localStorage.setItem("cart", JSON.stringify([]));
            localStorage.setItem("total", JSON.stringify(0));

            // Vaciar el carrito en el estado de React
            setCart([]);
        }
    }, [totalQuantity, setCart]); // Solo se ejecuta si cambia el totalQuantity




    return (
        <HeaderItem profile={profile} handleLinkClick={handleLinkClick} totalQuantity={totalQuantity}/>
    );
};

export default HeaderMenu;
