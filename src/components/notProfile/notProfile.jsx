import styles from './styles.module.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const NotProfile = () => {

    return (
        <>
            <Card className={styles.cardContainer}>
                <Card.Body>
                    <Card.Title className={styles.cardTitle}>Debes iniciar sesión</Card.Title>
                    <Card.Text>
                        Oops! Parece que no has iniciado sesión. Debes iniciar sesión para subir documentos y acceder a tu cuenta premium.
                        <br /> Pero no te preocupes, puedes:
                        <br />
                        - Volver a la página principal y seguir explorando. 🚀
                        <br />
                        - Iniciar sesión si ya tienes cuenta.
                        <br />
                        - O registrarte si aún no tienes cuenta.
                    </Card.Text>
                    <Link to={"/"}>
                        <Button variant="primary">Volver al inicio</Button>
                    </Link>
                    <Link to={"/login"} style={{ marginLeft: "10px" }}>
                        <Button variant="primary">Ir a login</Button>
                    </Link>
                    <Link to={"/register"} style={{ marginLeft: "10px" }}>
                        <Button variant="secondary">Registrarse</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default NotProfile;