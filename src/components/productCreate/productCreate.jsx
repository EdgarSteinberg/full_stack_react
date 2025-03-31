import { useContext, useEffect, useState } from "react";
import ProductList from "../productList/productList";
import { CartContext } from "../../context/cartContext";
import ProductForm from "./productForm";
import styles from './styles.module.css';

const ProductCreate = () => {
    const { updatedProducts, products, setProducts } = useContext(CartContext);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        code: "",
        stock: "",
        category: "",
        category_product: "",
        thumbnail: null
    });

    // Cargar categorías desde la API
    useEffect(() => {
        fetch("http://localhost:8080/api/categories")
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar las categorías");
                return response.json();
            })
            .then(json => setCategories(json.payload || []))
            .catch(error => console.error("Error al obtener categorías:", error));
    }, []);

    // Manejo del cambio en el formulario
    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: type === "file" ? files[0] || prevForm[name] : value
        }));
    };

    // Manejo del cambio de categoría
    const handleCategoryChange = (event) => {
        const selected = event.target.value;
        setSelectedCategory(selected);
        setForm(prevForm => ({
            ...prevForm,
            category: selected
        }));
    };

    // Manejo del envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (value !== null && value !== "") {
                formData.append(key, value);
            }
        });

        try {
            const response = await fetch("http://localhost:8080/api/products", {
                method: "POST",
                credentials: 'include',
                body: formData
            });

            if (!response.ok) {
                throw new Error("Error al crear el producto");
            }

            const data = await response.json();

            console.log("Producto creado:", data);

            if (data?.payload?.product) {
                // Actualizar la lista de productos con el nuevo producto usando setProducts
                setProducts((prevProducts) => [...prevProducts, data.payload.product]);

                // Limpiar el formulario
                setForm({
                    title: "",
                    description: "",
                    price: "",
                    code: "",
                    stock: "",
                    category: "",
                    category_product: "",
                    thumbnail: null
                });
                setSelectedCategory("");
                alert("Producto creado correctamente");
            } else {
                console.error("Respuesta inesperada del servidor:", data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <h4 className={styles.text}>Agregar Nuevo Producto</h4>
            <ProductForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleCategoryChange={handleCategoryChange}
                selectedCategory={selectedCategory}
                form={form}
                categories={categories}
            />
              <ProductList />
          
          
        </>
    );
};

export default ProductCreate;
