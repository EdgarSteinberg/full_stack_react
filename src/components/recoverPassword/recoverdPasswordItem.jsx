import { Button, Card, Form } from "react-bootstrap";
import styles from './styles.module.css';

const RecoverPasswordItem = ({ handlePassword, email, setEmail }) => {

    return (
        <>
            <div className={styles.itemContainer}>
                <Card className={styles.card}>
                    <Card.Body >
                        <Card.Title>Restablecer Contraseña</Card.Title>
                        <Card.Text>
                            Por favor, ingrese su correo electronico.
                        </Card.Text>
                        <Form onSubmit={handlePassword}>
                            <Form.Group controlId="email">
                                <Form.Label>Ingresa tu correo Electronico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo Electronico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Button type="submit" variant="primary" className={styles.margin}>Enviar</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default RecoverPasswordItem;