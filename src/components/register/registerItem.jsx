import { Col, Form, Row, Button,Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Github } from 'react-bootstrap-icons';

const RegisterItem = ({form,handleSubmit ,handleOnChange,errorMessage, handleLoginWithGitHub}) => {
    

    return (
        <>
         <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm w-50 mx-auto">
                <h4 className="text-center mb-4">Crea una cuenta</h4>

                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <Form.Group as={Row} className="mb-3" controlId="first_name">
                    <Form.Label column sm="2">Nombre</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="first_name"
                            placeholder="Ingrese su nombre"
                            required
                            value={form.first_name}
                            onChange={handleOnChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="last_name">
                    <Form.Label column sm="2">Apellido</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="last_name"
                            placeholder="Ingrese su apellido"
                            required
                            value={form.last_name}
                            onChange={handleOnChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="age">
                    <Form.Label column sm="2">Edad</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="number"
                            name="age"
                            placeholder="Ingrese su edad"
                            required
                            value={form.age}
                            onChange={handleOnChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm="2">Email</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Ingrese su email"
                            required
                            value={form.email}
                            onChange={handleOnChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="password">
                    <Form.Label column sm="2">Password</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Ingrese su password"
                            required
                            value={form.password}
                            onChange={handleOnChange}
                        />
                    </Col>
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                    Registrarse
                </Button>

                <Button onClick={handleLoginWithGitHub} variant="dark" className="w-100 mt-3">
                    Iniciar sesión con GitHub <Github size={20} className="ms-2" />
                </Button>

                <div className="text-center mt-3">
                    <span>¿Ya tienes cuenta? </span>
                    <Link to={'/login'} className="text-primary fw-bold">
                        Inicia sesión aquí
                    </Link>
                </div>
            </Form>
        </>
    )
}


export default RegisterItem;