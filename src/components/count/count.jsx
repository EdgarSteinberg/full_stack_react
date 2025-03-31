import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from "react";
import styles from './styles.module.css'
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const Count = ({ onAdd, product }) => {
    const [count, setCount] = useState(1);
    const { profile } = useContext(CartContext);

    const addCount = () => { setCount(count + 1); }

    const subtractCount = () => { count > 1 && setCount(count - 1); }

    const resetCount = () => { setCount(1); }

    const addProductToCart = () => { count > 0 && onAdd(count); }

    return (
        <>
            <div className={styles.cardContainer}>
                <Card className={styles.cardStyles}>
                    {/* Imagen del producto */}
                    <div style={{ flex: '1', overflow: 'hidden' }}>
                        <Card.Img
                            variant="top"
                            src={`http://localhost:8080/products/${product.category_product}/${product.thumbnails[0]}`}
                            alt={product.title}
                            className={styles.img}
                        />
                    </div>

                    {/* Detalles del producto */}
                    <div className={styles.card}>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{product.title}</Card.Title>
                            <Card.Text style={{ color: '#555', marginBottom: '15px' }}>
                                <strong>Descripción:</strong> {product.description}
                            </Card.Text>

                            {/* Contador de productos */}
                            <div className={styles.contador}>
                                <Button variant="outline-primary" onClick={subtractCount}>-</Button>
                                <span style={{ fontSize: '1.2rem' }}>{count}</span>
                                <Button variant="outline-primary" onClick={addCount}>+</Button>
                            </div>

                            {/* Botón de agregar al carrito */}
                            {profile ? (
                                <Button variant="success" onClick={addProductToCart} style={{ width: '100%' }}>
                                    Agregar al carrito
                                </Button>
                            ) : (
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ color: '#888' }}>Para poder realizar la compra debes estar logeado</p>
                                    <Link to={'/login'}>
                                        <Button variant="primary">Iniciar Sesión</Button>
                                    </Link>
                                </div>
                            )}
                        </Card.Body>
                    </div>
                </Card>
            </div>
            
        </>
    );

}

export default Count;