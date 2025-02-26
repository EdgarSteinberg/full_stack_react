import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";


const ItemDetailContainer = () => {
    const [error , setError] = useState(null);
    const [product, setProduct] = useState([]);
    const [loading , setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/products/${id}`)
        .then(response => {
            if(!response.ok){
                return "Error al obtener el producto"
            }
            return response.json();
        })
        .then(json => {
           
            setProduct(json.payload)
            console.log(json.payload);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, [])

    return(
        <>
            {
                loading ? (
                    <p>...Cargando</p>
                ) : (
                    error ? (
                        <p>Error {error}</p>
                    ) : (
                        <ItemDetail product={product}/>
                    )
                )
            }
        </>
    )
}

export default ItemDetailContainer;