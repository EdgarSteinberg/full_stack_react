import styles from './styles.module.css';
import { useContext, useEffect, useState } from "react";
import ProductListItem from "./productListItem";
import { CartContext } from "../../context/cartContext";
import SkeletonCard from '../skeleton_card/skeleton_card';
import NotProfile from '../notProfile/notProfile';
import Swal from "sweetalert2";


const ProductList = () => {
    const { profile, products, updatedProducts } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    if (!profile) { return (<NotProfile />); }

    useEffect(() => {
        fetch("https://full-stack-smf0.onrender.com/api/products")
            .then(response => response.json())
            .then(json => updatedProducts(json.payload))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, [profile]);

    // Función para eliminar un producto
    const handleDelete = (productId) => {
        console.log("ID del producto a eliminar:", productId);
        // const token = getCookie("coderCookieToken"); // Obtener el token desde la cookie
        // console.log("Token enviado en la solicitud:", token);

        fetch(`https://full-stack-smf0.onrender.com/api/products/${productId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',  // Asegúrate de incluir las cookies en la solicitud
        })
            .then(response => {
                // console.log("Respuesta del servidor:", response);
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.message || "Error al eliminar el producto");
                    });
                }
                return response.json(); // Si la respuesta es válida, procesa como JSON
            })
            .then(data => {
                Swal.fire({ icon: "success", title: "Éxito", text: "Producto Eliminado correctamente" });
                console.log("Datos después de eliminar:", data);
                // setProducts(products.filter(product => product._id !== productId));
                updatedProducts(products.filter(product => product._id !== productId));
            })
            .catch(error => {
                console.error("Error al eliminar el producto:", error);
                Swal.fire({ icon: "error", title: "Error", text: `${error.message}` });

            });
    };


    return (
        <div className={styles.container}>

            {loading ? (
                <div className={styles.itemListContainer}>
                    <SkeletonCard />
                </div>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ProductListItem
                    products={products}
                    handleDelete={handleDelete}
                />

            )}

        </div>
    );
};

export default ProductList;






// Función para obtener el valor de una cookie por su nombre
// const getCookie = (name) => {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
// };