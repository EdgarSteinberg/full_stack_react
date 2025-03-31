import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import styles from './styles.module.css';

const RecoverPassword = () => {
    const [email, setEmail] = useState('');

    const handlePassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/users/recover-password", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            if (data.status === "success") {
                alert("Email enviado");
            } else {
                alert("Error al enviar email: " + data.message);
            }

            setEmail('');
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

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
    );
};

export default RecoverPassword;
