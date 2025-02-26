import { Link } from "react-router-dom";

const CategoryProduct = ({ products }) => {

    return (
        <>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {products.map(product => (
                    <div key={product._id} style={{ textAlign: "center", cursor: "pointer" }}>
                        <img
                            src={`http://localhost:8080/products/${product.category_product}/${product.thumbnails[0]}`}
                            alt={product.title}
                            width={100}
                        />
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <Link to={`/productos/${product._id}`}>
                            <button>Ver Detalle</button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CategoryProduct;