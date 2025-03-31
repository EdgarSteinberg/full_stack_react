import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Card, Form } from "react-bootstrap";
import styles from './styles.module.css';

const ContactoForm = ({ handleSubmit, onChange, form }) => {

    return (
        <div>
            <Card className={styles.card}>
                <Card.Body>
                    <Card.Title>¡Estamos aquí para ayudarte!</Card.Title>
                    <Card.Text>
                        Si tienes alguna pregunta o comentario, por favor, completa el siguiente formulario y nos pondremos en contacto contigo a la brevedad.
                    </Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre"
                                        name="first_name"
                                        value={form.first_name}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Apellido"
                                        name="last_name"
                                        value={form.last_name}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                value={form.email}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Comentario</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                value={form.message}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Button type="submit">Enviar</Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ContactoForm;