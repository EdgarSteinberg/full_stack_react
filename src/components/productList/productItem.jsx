import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css';


const ProductItem = ({ pr, handleDelete }) => {
    return (
        <div className={styles.container}>

            <Card style={{ width: '14rem', alignItems: 'center' }}>
                {pr.thumbnails?.length > 0 && (
                    <Card.Img
                        variant="top"
                        src={`http://localhost:8080/products/${pr.category_product}/${pr.thumbnails[0]}`}
                        alt={`${pr.title} 1`}
                        className={styles.image}
                    />
                )}
                <Card.Body className={styles.card} >
                    <Card.Title>{pr.title}</Card.Title>
                    <Card.Text>{pr.description}</Card.Text>
                    <Card.Text style={{color: 'green'}}> ${pr.price}</Card.Text>
                    <Button variant="danger" onClick={() => handleDelete(pr._id)}>Eliminar</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductItem;
