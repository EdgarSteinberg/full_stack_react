import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css';
import { useState } from 'react';

const ProductItem = ({ pr, handleDelete }) => {
    const [verMas, setVerMas] = useState(false);


    return (
        <div className={styles.container}>

            <Card style={{ width: '14rem', alignItems: 'center' }}>
                {pr.thumbnails?.length > 0 && (
                    <Card.Img
                        variant="top"
                        src={`https://full-stack-smf0.onrender.com/products/${pr.category_product}/${pr.thumbnails[0]}`}
                        alt={`${pr.title} 1`}
                        className={styles.image}
                    />
                )}
                <Card.Body className={styles.card} >
                    <Card.Title>{pr.title}</Card.Title>
                    <Card.Text>
                        <strong>Descripción:</strong>{" "}
                        {verMas ? pr.description : `${pr.description.slice(0, 100)}...`}
                        <br />
                        <Button
                            variant='link'
                            onClick={() => setVerMas(!verMas)}
                            style={{ color: "#0d6efd", textDecoration: "underline" }}
                        >
                            {verMas ? "Ver menos" : "Ver más"}
                        </Button>
                    </Card.Text>
                    <Card.Text style={{ color: 'green' }}> ${pr.price}</Card.Text>
                    <Button variant="danger" onClick={() => handleDelete(pr._id)}>Eliminar</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductItem;
