import { createContext, useState, useEffect } from "react";
 
// Crear el contexto
export const CartContext = createContext({ cart: [] });

// Componente proveedor del contexto
export const CartComponentContext = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado del carrito
    const [total, setTotal] = useState(0); // Total del carrito
    const [profile, setProfile] = useState(null);  // Estado del perfil
    const [loading, setLoading] = useState(true);  // Estado de carga del perfil
    const [products, setProducts] = useState([]); // Estado productos

    // Función para calcular el total de la compra
    const totalCompra = () => {
        const total = cart.reduce((acc, pr) => acc + pr.quantity * pr.price, 0);
        setTotal(total);
    };

    // Función para agregar un producto al carrito
    const addProductContext = (updatedProduct) => {
        setCart((prevCart) => {
            const productExists = prevCart.find((product) => product._id === updatedProduct._id);
            if (productExists) {
                return prevCart.map((product) =>
                    product._id === updatedProduct._id
                        ? { ...product, quantity: product.quantity + updatedProduct.quantity, total: product.total + updatedProduct.total }
                        : product
                );
            } else {
                return [...prevCart, updatedProduct];
            }
        });

        setTotal((prevTotal) => prevTotal + updatedProduct.total);
    };

    // Función para limpiar el carrito
    const clearCart = () => {
        setCart([]);
        setTotal(0);
    };

    // Función para eliminar un producto del carrito
    const deleteProduct = (_id) => {
        const productFilter = cart.filter((pr) => pr._id !== _id);
        setCart(productFilter);
    };

    const login = (user) => {
        console.log("Datos recibidos en login:", user);  // Verifica si los datos llegan a la función
        setProfile(user);  // Actualiza el perfil
    };
    
    const logout = () => {
        setProfile(null);  // Limpiamos el perfil cuando el usuario se desloguea
    };

    // Cargar el carrito desde localStorage cuando el componente se monta
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const savedTotal = savedCart.reduce((acc, pr) => acc + pr.quantity * pr.price, 0);
        setCart(savedCart);
        setTotal(savedTotal);
    }, []); // Solo se ejecuta una vez al montar el componente

    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("total", JSON.stringify(total));
    }, [cart, total]);

    // Obtener el perfil del usuario
    useEffect(() => {
        setLoading(true);

        fetch("http://localhost:8080/api/users/profile/profile", {
            method: "GET",
            credentials: "include",
        })
            .then((response) => {
                if (response.status === 401) {
                    login(null); // Si no hay autenticación, limpiamos el perfil
                    return;
                }
                if (!response.ok) {
                    throw new Error("Error en el servidor");
                }
                return response.json();
            })
            .then((data) => {
                if (data) {
                    login({
                        _id: data._id,
                        first_name: data.first_name,
                        last_name: data.last_name,
                        age: data.age,
                        email: data.email,
                        role: data.role,
                        cart: data.cart,
                        documents: data.documents,
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                login(null); // Si hay error, limpiamos el perfil
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); // El efecto se ejecuta cuando `profile` cambie

    // Actualizar lista de productos
    const updatedProducts = (newProducts) => {
        setProducts(newProducts);
    };

 

    return (
        <CartContext.Provider value={{
            cart,
            total,
            totalCompra,
            deleteProduct,
            clearCart,
            addProductContext,
            profile,
            setProfile,
            loading,
            products, // 🔑 Aquí se pasa el estado
            setProducts,
            updatedProducts, // 🔑 Aquí se pasa la función
            login,
            logout,
            setCart,
            setTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};
