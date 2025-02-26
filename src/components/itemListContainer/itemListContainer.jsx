import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { category } = useParams(); // Accede al parámetro de la URL

    useEffect(() => {
        const url = category
            ? `http://localhost:8080/api/products/category/${category}`
            : "http://localhost:8080/api/products"; // Si no hay categoría, obtiene todos los productos

        fetch(url)
            .then(response => response.ok ? response.json() : Promise.reject('Error al obtener productos'))
            .then(json => setProducts(json.payload))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [category]); // Dependencia de 'category' para volver a cargar cuando cambie

    return (
        <>
            {loading ? (
                <p>...cargando</p>
            ) : error ? (
                <p>Error : {error}</p>
            ) : (
                <ItemList products={products} />
            )}
        </>
    );
};

export default ItemListContainer;
