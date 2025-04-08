import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useEffect } from "react";
import HeaderItem from "./headerItem";
import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
    const navigate = useNavigate();

    const { profile, cart, setCart } = useContext(CartContext);

    const handleLogout = async () => {
        try {
            const response = await fetch("https://full-stack-smf0.onrender.com/api/users/logout", {
                method: "POST",
                credentials: "include",
            });

            if (response.ok) {
                await response.json();
                navigate('/login'); // Esta sí funciona sin recargar y sin Netlify enloqueciendo
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
        <HeaderItem
            profile={profile}
            handleLinkClick={handleLinkClick}
            totalQuantity={totalQuantity}
        />
    );
};

export default HeaderMenu;
