import { Link } from "react-router-dom";

const CategoryItem = ({ categories }) => {

    return (
        <>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {categories.map(cat => (
                    <Link key={cat._id} to={`/productos/category/${cat.category_name}`}>
                        <div style={{ textAlign: "center", cursor: "pointer" }}>
                            <img
                                src={`http://localhost:8080/products/${cat.category_name}/${encodeURIComponent(cat.category_image[0])}`}
                                alt={cat.category_name}
                                width={100}
                            />
                            <p>{cat.category_name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default CategoryItem;