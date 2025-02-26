import { useEffect, useState } from "react";
import ProductListItem from "./productListItem";

// Función para obtener el valor de una cookie por su nombre
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then(response => response.json())
            .then(json => setProducts(json.payload))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    // Función para eliminar un producto
    const handleDelete = (productId) => {
        console.log("ID del producto a eliminar:", productId);
        const token = getCookie("coderCookieToken"); // Obtener el token desde la cookie
        console.log("Token enviado en la solicitud:", token);
    
        fetch(`http://localhost:8080/api/products/${productId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            credentials: 'include',  // Asegúrate de incluir las cookies en la solicitud
        })
            .then(response => {
              // console.log("Respuesta del servidor:", response);
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(text || "Error al eliminar el producto");
                    });
                }
                return response.json(); // Si la respuesta es válida, procesa como JSON
            })
            .then(data => {
                console.log("Datos después de eliminar:", data);
                setProducts(products.filter(product => product._id !== productId));
            })
            .catch(error => {
                console.error("Error al eliminar el producto:", error);
                setError(error.message);
            });
    };
    

    return (
        <>
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                    <ProductListItem products={products} handleDelete={handleDelete}/> 
                    
               ) }
            
        </>
    );
};

export default ProductList;
