import styles from './styles.module.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const Category_products1 = ({ product, title, purchases }) => {

    return (
        <div >
            <h4>{title}</h4>
            <Card className={styles.cardCategorie}>
                <Card.Img variant="top"
                    src={`http://localhost:8080/products/${product.category_product}/${product.thumbnails[0]}`}
                    alt={product.title}
                    className={styles.imagex} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>

                    {/* Stock Badge */}
                    <Badge bg={product.stock > 0 ? "success" : "danger"}>
                        {product.stock > 0 ? `Stock: ${product.stock}` : "Agotado"}
                    </Badge>

                    {/* Estrellas según cantidad de compras */}
                    <div className={styles.stars}>
                        {/* {"★".repeat(Math.min(product.purchases, 5)).padEnd(5, "☆")} ({product.purchases}) */}
                        {"★".repeat(Math.min(product.purchases || 0, 5)).padEnd(5, "☆")} ({product.purchases || 0})
                    </div>

                    <Card.Text style={{ color: 'green' }}>
                        Precio: ${product.price}
                    </Card.Text>

                    <Link to={`/productos/${product._id}`}>
                        <Button variant="primary">Más infromación</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Category_products1 