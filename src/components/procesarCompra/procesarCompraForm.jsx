import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './styles.module.css';

const ProcesarCompraForm = ({ handleSubmit, onChange, form , emailMatch}) => {

    return (
        <>
            <div className={styles.cardContainer} >
                {/* 📌 Sección de Datos del Usuario */}
                <div className={styles.cardDetail}>
                    <p className={styles.text}>Ingresa tu información</p>

                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    placeholder="Nombre"
                                    name="first_name"
                                    value={form.first_name}
                                    onChange={onChange}
                                    required
                                />
                            </Col>
                            <Col>
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    placeholder="Apellido"
                                    name="last_name"
                                    value={form.last_name}
                                    onChange={onChange}
                                    required
                                />
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="example@gmail.com"
                                name="email"
                                value={form.email}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirmar Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Confirm email"
                                name="confirm_email"
                                value={form.confirm_email}
                                onChange={onChange}
                                isInvalid={!emailMatch}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Los emails no coinciden.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phone"
                                placeholder="Ingresa tu número de teléfono (opcional)"
                                value={form.phone}
                                onChange={onChange}
                            />
                        </Form.Group>
                        {/* <Button type="submit" disabled={!emailMatch}>Enviar</Button> */}
                    </Form>
                </div>

                {/* 📌 Sección del Carrito */}
                <div className={styles.cardDetail}>
                    <p className={styles.text}>Resumen del Carrito</p>
                    <Form.Group className="mb-3">
                        <Form.Label>Productos</Form.Label>
                        <Form.Control as="textarea" rows={5} name="cart_info" value={form.cart_info} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Total a pagar</Form.Label>
                        <Form.Control type="text" name="total_price" value={`$${form.total_price}`} readOnly />
                    </Form.Group>

                    <Button onClick={handleSubmit} type='button' variant='success'>Comprar</Button>
                </div>


            </div>
        </>
    )
}

export default ProcesarCompraForm;