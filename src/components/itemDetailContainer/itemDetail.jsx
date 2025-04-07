import { useState } from "react";
import Count from "../count/count";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import styles from './styles.module.css';
import Swal from "sweetalert2";

const ItemDetail = ({ product }) => {
    const [addQuantity, setAddQuantity] = useState(0);
    const [addProduct, setAddProduct] = useState(false);
    const { addProductContext, profile } = useContext(CartContext);
    const navigate = useNavigate(); // Usamos el hook useNavigate para la redirección


    const addProductToCart = async (quantity) => { 
        setAddQuantity(quantity);
        const total = quantity * product.price;
        const updatedProduct = { ...product, quantity, total }; 
        addProductContext(updatedProduct);
        setAddProduct(true);
        Swal.fire("Producto agregado al carrito");
    
        try {
            // Aquí haces la petición POST al backend
            const cartId = profile.cart._id;  // Accedes al carrito del perfil
    
            // Enviar datos al backend para agregar el producto al carrito
            const response = await fetch(`https://full-stack-smf0.onrender.com/api/carts/${cartId}/products/${product._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            const data = await response.json();
    
            if (data.status === 'Succes') {
                setTimeout(() => {
                    navigate("/cart");
                }, 1000);
            } else {
                console.error('Error al agregar el producto al carrito');
            }
        } catch (error) {
            console.error('Error al comunicarte con el backend:', error);
        }
    };
    

    return (
        <div>
            {addQuantity > 0 ? (
                <div className={styles.item}>
                <Spinner animation="border" variant="danger" />
                <strong>Cargando...</strong>
                </div>
            ) : (
                <Count onAdd={addProductToCart} product={product} />
            )}
        </div>
    );
};

export default ItemDetail;
