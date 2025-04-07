import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';

const Filtros = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterPrice, setFilterPrice] = useState("menor-mayor"); // Se inicia vacío
    const [filterAlfabetic, setFilterAlfabetic] = useState("alfabeticamente"); // Se inicia vacío

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobileView = window.innerWidth < 700;
            setIsMobile(mobileView);

            if (mobileView) {
                setFilterPrice("");  // Resetea el filtro al cambiar a mobile
                setFilterAlfabetic(""); // Resetea el filtro al cambiar a mobile
            } else {
                setFilterPrice("menor-mayor");
                setFilterAlfabetic("alfabeticamente");
            }
        };

        handleResize(); // Ejecutar al inicio para detectar el tamaño correcto
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        fetch('https://full-stack-smf0.onrender.com/api/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                return response.json();
            })
            .then(data => setProducts(data.payload))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, []);

    const filterPriceFunction = () => {
        if (!filterPrice) return []; // Si no hay filtro, no muestra nada
        let productFilter = [...products];

        if (filterPrice === "menor-mayor") {
            productFilter.sort((a, b) => a.price - b.price);
        } else if (filterPrice === "mayor-menor") {
            productFilter.sort((a, b) => b.price - a.price);
        }

        return productFilter.slice(0, 5);
    };

    const filterAlfabeticFunction = () => {
        if (!filterAlfabetic) return []; // Si no hay filtro, no muestra nada
        let productFilter = [...products];

        const compare = filterAlfabetic === "alfabeticamente"
            ? (a, b) => (a.title > b.title ? 1 : (a.title < b.title ? -1 : 0))
            : (a, b) => (a.title < b.title ? 1 : (a.title > b.title ? -1 : 0));

        productFilter.sort(compare);

        return productFilter.slice(0, 5);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className={styles.filterContainer}>
            <Form.Select
                aria-label="Filtrar Precio"
                onChange={(e) => setFilterPrice(e.target.value)}
                value={filterPrice} // Se resetea en mobile
                style={{ fontSize: isMobile ? "16px" : "16px", marginBottom: "10px" }}
            >
                <option value="">Selecciona un filtro de precio</option>
                <option value="menor-mayor">Precio: Menor a Mayor</option>
                <option value="mayor-menor">Precio: Mayor a Menor</option>
            </Form.Select>

            {filterPrice && filterPriceFunction().map(pr => (
                <div key={pr._id}>
                    <Link to={`/productos/${pr._id}`}>
                        <p>{capitalizeFirstLetter(pr.title)} - ${pr.price}</p>
                    </Link>
                </div>
            ))}

            <Form.Select
                aria-label="Filtrar Alfabético"
                onChange={(e) => setFilterAlfabetic(e.target.value)}
                value={filterAlfabetic} // Se resetea en mobile
                style={{
                    fontSize: isMobile ? "16px" : "16px", marginBottom: "10px"
                }}
            >
                <option value="">Selecciona un filtro alfabético</option>
                <option value="alfabeticamente">Orden Alfabético (A-Z)</option>
                <option value="alfabeticamente-reversa">Orden Alfabético (Z-A)</option>
            </Form.Select>

            {filterAlfabetic && filterAlfabeticFunction().map(pr => (
                <div key={pr._id}>
                    <Link to={`/productos/${pr._id}`}>
                        <p>{capitalizeFirstLetter(pr.title)} - ${pr.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Filtros;
