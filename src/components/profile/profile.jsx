import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/cartContext";
import { Container, Row, Col, Form, Button, Spinner, Card, ListGroup } from 'react-bootstrap';


const Profile = () => {
    const { profile, loading } = useContext(CartContext);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando perfil...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <Container className="mt-4">
            <h1 className="mb-4 text-center">Perfil de Usuario</h1>
            
            <Card className="mb-4 shadow">
                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control value={profile.first_name} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control value={profile.last_name} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={profile.email} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Edad</Form.Label>
                                    <Form.Control value={profile.age} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Rol</Form.Label>
                                    <Form.Control value={profile.role} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>ID de Usuario</Form.Label>
                                    <Form.Control value={profile._id} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>

            {/* Sección del Carrito */}
            <Card className="mb-4 shadow">
                <Card.Body>
                    <h3>Carrito de Compras</h3>
                    {profile.cart.products.length > 0 ? (
                        <ListGroup>
                            {profile.cart.products.map((product, index) => (
                                <ListGroup.Item key={index}>{product.name} - {product.quantity} unidades</ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <p className="text-muted">Carrito vacío</p>
                    )}
                </Card.Body>
            </Card>

            {/* Sección de Documentos */}
            <Card className="mb-4 shadow">
                <Card.Body>
                    <h3>Documentos Cargados</h3>
                    {profile.documents.length > 0 ? (
                        <ListGroup>
                            {profile.documents.map((doc, index) => (
                                <ListGroup.Item key={index}>{doc.name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <p className="text-muted">No se han cargado documentos</p>
                    )}
                </Card.Body>
            </Card>

            {/* Botón de volver */}
            <div className="text-center mt-3">
                <Link to="/productos">
                    <Button variant="primary">Volver a la tienda</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Profile;
