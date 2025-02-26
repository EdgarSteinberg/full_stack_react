import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, deleteProduct, total } = useContext(CartContext);  // Ya obtenemos el total desde el contexto

    return (
        <>
            {cart.length > 0 ? (
                <>
                    {cart.map((pr) => (
                        <div key={pr._id}>
                            <h3>{pr.title}</h3>
                            <p>{pr.description}</p>
                            <p>Precio: ${pr.price}</p>
                            <p>Cantidad: {pr.quantity}</p>
                            <p>Total: ${pr.total}</p>
                            <img style={{width: "100px", height: "150px"}} src={`http://localhost:8080/products/${pr.category}/${pr.thumbnails[0]}`} alt={pr.title} />

                            <br />
                            <button onClick={() => deleteProduct(pr._id)}>Eliminar</button>
                        </div>
                    ))}
                    <p>Total Compra: ${total}</p> {/* El total se muestra desde el contexto */}
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </>
            ) : (
                <>
                    <p>El carrito está vacío</p>
                    <Link to={"/productos"}>
                        <button>Inicio</button>
                    </Link>
                </>
            )}
        </>
    );
};

export default Cart;
