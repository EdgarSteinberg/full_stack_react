import { Link } from "react-router-dom";
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Category_item1 = ({ cat }) => {
    return (
        <Link to={`/productos/category/${cat.category_name}`} className={styles.cardLink}>
            <Card className={styles.cardCategorie}>
                <div className={styles.imageContainer}>
                    <Card.Img 
                        variant="top" 
                        src={`http://localhost:8080/products/${cat.category_name}/${encodeURIComponent(cat.category_image[0])}`} 
                        alt={cat.category_name} 
                        className={styles.image} 
                    />
                    <div className={styles.overlay}>
                        <Card.Title className={styles.categoryTitle}>{cat.category_name}</Card.Title>
                    </div>
                </div>
                <Card.Body>
                    <p className={styles.description}>Descubre los mejores productos de {cat.category_name}.</p>
                    <Button variant="primary">Ver productos</Button>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default Category_item1;
