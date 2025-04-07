import styles from './styles.module.css';
import { Button, Card, Form } from "react-bootstrap";

const ResetPasswordItem = ({handlePassword, password, setPassword}) => {

    return(
        <>
        <div className={styles.itemContainer}>
            <Card className={styles.card}>
                <Card.Body >
                    <Card.Title>Restablecer Contraseña</Card.Title>
                    <Card.Text>
                        Por favor, ingrese su nueva contraseña.
                    </Card.Text>
                    <Form onSubmit={handlePassword}>
                        <Form.Group controlId="password">
                            <Form.Label>Nueva Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su nueva contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
export default ResetPasswordItem;