const ProductListItem = ({ products, handleDelete }) => {
    return (
        <>
            {
                products.map(pr => {
                  //  console.log("Producto:", pr);
                    return (
                        <div key={pr._id} style={{ border: "1px solid black", borderRadius: "5px" }}>
                            <p>{pr.title}</p>
                            <p>{pr.description}</p>
                            <p>Precio: ${pr.price}</p>
                            {pr.thumbnails?.map((img, index) => (
                                <img
                                    key={index}
                                    src={`http://localhost:8080/products/${pr.category}/${img}`}
                                    alt={`${pr.title} ${index + 1}`}
                                    width="100"
                                />
                            ))}
                            <br />
                            <button onClick={() => handleDelete(pr._id)}>Eliminar</button>
                        </div>
                    );
                })
            }
        </>
    );
};

export default ProductListItem;
