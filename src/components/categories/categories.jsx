import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import CategoryItem from "./category_item";
import CategoryProduct from "./category_product";
import Spinner from 'react-bootstrap/Spinner';

const Categories = () => {
    const [categories, setCategories] = useState([]);  // Para almacenar las categorías
    const [products, setProducts] = useState([]);      // Para almacenar los productos
    const [title, setTitle] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    // La URL para obtener las categorías o los productos dependiendo si 'category' está presente
    const uri = category
        ? `http://localhost:8080/api/products/category/${category}` // Si 'category' está presente, obtenemos los productos de esa categoría
        : "http://localhost:8080/api/categories"; // Si no, obtenemos las categorías

    useEffect(() => {
        setLoading(true);  // Indicamos que estamos cargando los datos
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                if (category) {
                    setProducts(json.payload); // Si estamos obteniendo productos, los almacenamos en el estado de productos
                    setTitle(category);
                } else {
                    setCategories(json.payload); // Si estamos obteniendo categorías, las almacenamos en el estado de categorías
                   
                }
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, [category]); // El hook depende de 'category' para obtener nuevos datos

    return (
        <div>
            {
                error ? (
                    <p>Error: {error}</p>
                ) : (
                    category ? (
                        // Si estamos en la vista de productos, mostramos los productos de esa categoría
                        <>
                            <h4>{title ? title.toUpperCase() : <Spinner animation="border" variant="danger" />}</h4>
                            <CategoryProduct products={products} title={title} />
                        </>
                    ) : (
                        // Si no estamos en la vista de productos, mostramos las categorías
                        <>
                            {/* <h1>Top marcas y modelos</h1> */}
                            <CategoryItem categories={categories} />
                        </>

                    )
                )}
        </div>
    );
};

export default Categories;
