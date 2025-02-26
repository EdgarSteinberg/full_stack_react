import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const CartContext = createContext({ cart: [] });

// Componente proveedor del contexto
export const CartComponentContext = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado del carrito
    const [total, setTotal] = useState(0); // Total del carrito

    const totalCompra = () => {
        const total = cart.reduce((acc, pr) => acc + pr.quantity * pr.price, 0);
        setTotal(total);
    };

    // Función para agregar un producto al carrito
    const addProductContext = (updatedProduct) => {
        setCart((prevCart) => {
            const productExists = prevCart.find((product) => product._id === updatedProduct._id);
            console.log(productExists);
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

    const clearCart = () => {
        setCart([]);
        setTotal(0);
    };

    const deleteProduct = (_id) => {
        const productFilter = cart.filter((pr) => pr._id !== _id);
        setCart(productFilter);
    };

    useEffect(() => {
        totalCompra();
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, total, totalCompra, deleteProduct, clearCart, addProductContext }}>
            {children}
        </CartContext.Provider>
    );
};
