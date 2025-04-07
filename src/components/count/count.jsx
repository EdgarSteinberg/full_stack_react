import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from "react";
import styles from './styles.module.css'
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const Count = ({ onAdd, product }) => {
    const [count, setCount] = useState(1);
    const { profile } = useContext(CartContext);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(prev => !prev);
    };

    const descriptionPreview = product.description.length > 100
        ? `${product.description.slice(0, 100)}...`
        : product.description;

    const addCount = () => { setCount(count + 1); }

    const subtractCount = () => { count > 1 && setCount(count - 1); }

    const addProductToCart = () => { count > 0 && onAdd(count); }

    return (
        <>
            <div className={styles.cardContainer}>
                <Card className={styles.cardStyles}>
                    {/* Imagen del producto */}
                    <div className={styles.cardImage}>
                        <Card.Img
                            variant="top"
                            src={`https://full-stack-smf0.onrender.com/products/${product.category_product}/${product.thumbnails[0]}`}
                            alt={product.title}
                            className={styles.img}
                        />
                    </div>

                    {/* Detalles del producto */}
                    <div className={styles.card}>
                        <Card.Body>
                            <Card.Title className={styles.title}>{product.title}</Card.Title>
                            <Card.Text style={{ color: '#555', marginBottom: '15px' }}>
                                <strong>Descripción:</strong>{' '}
                                {showFullDescription ? product.description : descriptionPreview}
                                {product.description.length > 100 && (
                                    <Button
                                        variant="link"
                                        onClick={toggleDescription}
                                        style={{ padding: 0, marginLeft: '5px' }}
                                    >
                                        {showFullDescription ? 'Ver menos' : 'Ver más'}
                                    </Button>
                                )}
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