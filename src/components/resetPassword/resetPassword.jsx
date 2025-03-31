import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import styles from './styles.module.css';

const ResetPassword = () => {
    const [password, setPassword] = useState('');

    const handlePassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/users/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token, password })
            });

            const data = await response.json();

            if (data.status === "success") {
                alert("Contraseña creada correctamente");
            } else {
                alert("Hubo un error al actualizar la contraseña");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
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
    );
};

export default ResetPassword;
