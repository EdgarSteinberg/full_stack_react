import styles from './styles.module.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const Item = ({ _id, title, price, thumbnails, category_product, stock, purchases }) => {

    return (
        <div>
            <Card className={styles.cardNew}>
                {thumbnails?.length > 0 && category_product && (
                    <Card.Img 
                        variant="top" 
                        src={`http://localhost:8080/products/${category_product}/${thumbnails[0]}`} 
                        alt={title} 
                        className={styles.image} 
                    />
                )}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    {/* Stock Badge */}
                    <Badge bg={stock > 0 ? "success" : "danger"}>
                        {stock > 0 ? `Stock: ${stock}` : "Agotado"}
                    </Badge>

                    {/* Estrellas según cantidad de compras */}
                    <div className={styles.stars}>
                        {"★".repeat(Math.min(purchases, 5)).padEnd(5, "☆")} ({purchases})
                    </div>

                    <Card.Text style={{ color: 'green' }}>
                        Precio: ${price}
                    </Card.Text>

                    <Link to={`/productos/${_id}`}>
                        <Button variant="primary">Más información</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;
