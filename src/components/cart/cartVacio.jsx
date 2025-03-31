import { Link } from "react-router-dom";
import styles from './styles.module.css';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartX } from "react-bootstrap-icons";


const CartVacio = () => {


    return (
        <>
            <div className={styles.emptyCartLink}>
                <Card style={{ width: '18rem', textAlign: 'center', padding: '10px' }}>
                    <Card.Header>
                        <CartX size={50} color="gray" />
                        <h5>Tu carrito está vacío</h5>
                    </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>No dejes pasar nuestras ofertas 🎉</ListGroup.Item>
                        <ListGroup.Item>Explora nuestros productos</ListGroup.Item>
                        <ListGroup.Item>¡Agrega algo a tu carrito! 🛒</ListGroup.Item>
                        <Link to="/productos" className={styles.emptyCartLink}>
                            <Button variant="primary" style={{ marginTop: '5px' }}>Ir a productos</Button>
                        </Link>
                    </ListGroup>
                </Card>
            </div>
        </>
    )
}

export default CartVacio;