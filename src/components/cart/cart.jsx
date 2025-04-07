import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import styles from './styles.module.css';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CartVacio from "./cartVacio";
import { Cart as CartIcon } from "react-bootstrap-icons";

const Cart = () => {
    const { cart, clearCart, deleteProduct, total } = useContext(CartContext);  // Ya obtenemos el total desde el contexto

    return (
        <>
            <h4 >
                <CartIcon size={30} /> Tu carrito de compras
            </h4>
            {cart.length > 0 ? (
                <>
                    <div className={styles.itemContainer}>
                        {cart.map((pr) => (
                            <div key={pr._id} className={styles.container}>
                                <Card className={styles.card}>
                                    <Card.Img className={styles.img} variant="top" src={`https://full-stack-smf0.onrender.com/products/${pr.category_product}/${pr.thumbnails[0]}`} alt={pr.title} />
                                    <Card.Body>
                                        <Card.Title>{pr.title}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item><strong>Descripción:</strong> {pr.description}</ListGroup.Item>
                                            <ListGroup.Item><strong>Precio:</strong> ${pr.price}</ListGroup.Item>
                                            <ListGroup.Item><strong>Cantidad:</strong> {pr.quantity}</ListGroup.Item>
                                            <ListGroup.Item style={{ color: 'green' }}><strong>Total:</strong> ${pr.total}</ListGroup.Item>
                                        </ListGroup>
                                        <Button onClick={() => deleteProduct(pr._id)} variant="danger">Eliminar</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <br></br>
                    <div className={styles.btn}>
                        <strong className={styles.total}> Total Compra: ${total}</strong>
                    </div>
                    <div >
                        <Link to={'/ticket'} >
                            <Button variant="success" className={styles.btn}>Procesar Compra</Button>
                        </Link>
                    </div>
                    <br></br>
                    <div className={styles.btn}>
                        <Button onClick={clearCart} variant="danger">Vaciar Carrito</Button>
                    </div>

                </>
            ) : (
                <CartVacio />
            )}
        </>
    );
};

export default Cart;
