import { Link } from "react-router-dom";

const Item = ({ _id, title, price, thumbnails, category_product }) => {

    return (
        <>
            <p>Titulo: {title}</p>
            <p>Precio: ${price}</p>
            {thumbnails?.length > 0 &&  category_product  && (
               <img style={{width: "100px", height: "150px"}} src={`http://localhost:8080/products/${category_product}/${thumbnails[0]}`} alt={title} />

            )}

            <br></br>
            <Link to={`/productos/${_id}`}>
                <button>Ver detalle</button>
            </Link>
        </>
    )
}

export default Item;