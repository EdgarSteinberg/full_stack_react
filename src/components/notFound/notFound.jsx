import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css';

const NotFound = () => {
    return (
        <>
            <Card className={styles.cardContainer}>
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>404 - Página no encontrada</Card.Title>
                    <Card.Text>
                        Oops! Parece que la página que buscas no existe o ha sido movida.
                        <br /> Pero no te preocupes, puedes volver a la página principal y seguir explorando. 🚀
                    </Card.Text>
                    <Link to={"/"}>
                        <Button variant="primary">Volver al inicio</Button>
                    </Link>
                </Card.Body>
            </Card>

        </>
    )
}

export default NotFound