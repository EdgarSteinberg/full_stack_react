import { useState } from "react";
import Count from "../count/count";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
    const [addQuantity, setAddQuantity] = useState(0);
    const [addProduct, setAddProduct] = useState(false);

    const { addProductContext } = useContext(CartContext);

    const addProductToCart = (quantity) => { // Por parametros obtenemos el Count 
        setAddQuantity(quantity); // se almancena el count
        const total = quantity * product.price;
        const updatedProduct = { ...product, quantity, total }; // Agregamos el producto con el total
        addProductContext(updatedProduct); // Context Pasamos solo el producto
        console.log("producto agregado", updatedProduct); // Para verificar que se actualiza correctamente
        setAddProduct(true);
    };
    

    return (
        <>
            <div>
                
                <h2>{product.title}</h2>
                <img style={{width: "100px", height: "150px"}} src={`http://localhost:8080/products/${product.category_product}/${product.thumbnails[0]}`} alt={product.title} />
                <p>Descripción: {product.description}</p>
                <p>Precio: ${product.price}</p>

            </div>
            <div>
                {
                    addQuantity > 0 ? (
                        <Link to={"/cart"}>
                        <button>Terminar compra</button>
                        </Link>
                    ) : (

                        <Count onAdd={addProductToCart} />
                    )
                }
            </div>
        </>
    )
}

export default ItemDetail