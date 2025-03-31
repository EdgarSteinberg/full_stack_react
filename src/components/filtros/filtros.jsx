import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const Filtros = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterPrice, setFilterPrice] = useState("menor-mayor");
    const [filterAlfabetic, setFilterAlfabetic] = useState("alfabeticamente");

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                return response.json();
            })
            .then(data => {
                setProducts(data.payload);
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, []);

    const filterPriceFunction = () => {
        let productFilter = [...products];

        switch (filterPrice) {
            case "menor-mayor":
                productFilter = productFilter.sort((a, b) => a.price - b.price);
                break;

            case "mayor-menor":
                productFilter = productFilter.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        return productFilter.slice(0, 5); // Limitamos a los 5 primeros productos
    };

    const filterAlfabeticFunction = () => {
        let productFilter = [...products];

        const compare = filterAlfabetic === "alfabeticamente"
            ? (a, b) => (a.title > b.title ? 1 : (a.title < b.title ? -1 : 0))
            : (a, b) => (a.title < b.title ? 1 : (a.title > b.title ? -1 : 0));

        productFilter = productFilter.sort(compare);

        return productFilter.slice(0, 5); // Limitamos a los 5 primeros productos
    };

    const onChangePrice = (e) => {
        setFilterPrice(e.target.value);
    };

    const onChangeAlfabetic = (e) => {
        setFilterAlfabetic(e.target.value);
    };

    // Productos filtrados por precio
    const filteredByPrice = filterPriceFunction();

    // Productos filtrados alfabéticamente
    const filteredByAlfabetic = filterAlfabeticFunction();


    // Función para capitalizar la primera letra:
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


 

    return (
        <div style={{marginTop: '10px'}}>
            <div >
                <Form.Select aria-label="Default select example" onChange={onChangePrice} value={filterPrice} style={{ fontSize: '15px' }}>
                    <option value="menor-mayor">Precio: Menor a Mayor</option>
                    <option value="mayor-menor">Precio: Mayor a Menor</option>
                </Form.Select >

                <div>
                    {
                        filteredByPrice.map(pr => (
                            <div key={pr._id}>
                                <Link to={`/productos/${pr._id}`}>
                                    <p>{capitalizeFirstLetter(pr.title)} - ${pr.price}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>

                <Form.Select aria-label="Default select example" onChange={onChangeAlfabetic} value={filterAlfabetic} style={{ fontSize: '15px' }}>
                    <option value="alfabeticamente">Orden Alfabético (A-Z)</option>
                    <option value="alfabeticamente-reversa">Orden Alfabético (Z-A)</option>
                </Form.Select >

                <div>
                    {
                        filteredByAlfabetic.map(pr => (
                            <div key={pr._id}>
                                <Link to={`/productos/${pr._id}`}>
                                    <p>{capitalizeFirstLetter(pr.title)} - ${pr.price}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Filtros;
