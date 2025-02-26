import ProductList from "../productList/productList";

const CreateProducts = () => {
    return (
        <>
            <form method="POST" action="http://localhost:8080/api/products" encType="multipart/form-data">
                <label htmlFor="title">Nombre</label>
                <input type="text" name="title" id="title" required />

                <label htmlFor="description">Descripción</label>
                <input type="text" name="description" id="description" required />

                <label htmlFor="price">Precio</label>
                <input type="number" name="price" id="price" required />

                <label htmlFor="code">Código</label>
                <input type="text" name="code" id="code" required />

                <label htmlFor="stock">Stock</label>
                <input type="number" name="stock" id="stock" required />

                <label htmlFor="category">Categoría</label>
                <input type="text" name="category" id="category" required />

                <label htmlFor="thumbnail">Imagen</label>
                <input type="file" name="thumbnail" id="thumbnail" accept="image/*" required />

                <button type="submit">Enviar</button>
            </form>
            <h1>Productos</h1>
            <ProductList />
        </>

    );
};

export default CreateProducts;
