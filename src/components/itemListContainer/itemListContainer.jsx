import styles from './styles.module.css';
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams, useLocation } from "react-router-dom";
import SkeletonCard from '../skeleton_card/skeleton_card';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { category } = useParams(); // Accede al parámetro de la URL

    const location = useLocation(); // Accedemos a la URL actual
    const searchQuery = new URLSearchParams(location.search).get("search"); // Obtenemos el parámetro "search"

    useEffect(() => {
        const url = category
            ? `https://full-stack-smf0.onrender.com/api/products/category/${category}`
            : "https://full-stack-smf0.onrender.com/api/products"; // Si no hay categoría, obtiene todos los productos

        fetch(url)
            .then(response => response.ok ? response.json() : Promise.reject('Error al obtener productos'))
            .then(json => setProducts(json.payload))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [category]); // Dependencia de 'category' para volver a cargar cuando cambie



    // Filtra los productos si hay un término de búsqueda
    const filteredProducts = searchQuery
        ? products.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : products;



    return (
        <div className={styles.itemListContainer}>
            {loading ? (
                <SkeletonCard />
            ) : error ? (
                <p>Error : {error}</p>
            ) : (
                <div className={styles.title}>
                    <h4>Lo último en tecnología móvil</h4>
                    <br></br>
                    <ItemList products={filteredProducts} />
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
