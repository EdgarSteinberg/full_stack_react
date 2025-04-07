import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';
import styles from './styles.module.css'; 

const LoginItem = ({handleSubmit,handleChange, form ,handleLoginWithGitHub, errorMessage}) => {

    return (
        <>
        <Form onSubmit={handleSubmit} className={styles.cardContainer}> {/* Agrega estilos opcionales */}
                {/* Campo Email */}
                <h4 className="text-center mb-4">Iniciar sesión</h4>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm="2">Email</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Ingrese su email"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                {/* Campo Password */}
                <Form.Group as={Row} className="mb-3" controlId="password">
                    <Form.Label column sm="2">Password</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="password"
                            name="password"
                            required
                            placeholder="Ingrese su contraseña"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                {/* Botón de Enviar */}
                <Button type="submit" variant="primary" className="w-100">
                    Iniciar sesión
                </Button>

                {/* Botón de GitHub */}
                <Button onClick={handleLoginWithGitHub} variant="dark" className="w-100 mt-3">
                    Iniciar sesión con GitHub <Github size={30} color="white" />
                </Button>

                <div className="text-center mt-3">
                    <span>¿No tienes cuenta?</span>
                    <Link to={'/register'} className="text-primary fw-bold">
                        Crear cuenta
                    </Link>
                </div>
                <div className="text-center mt-3">
                    <span>¿Olvidaste tu contraseña?</span>
                    <Link to={'/recover-password'} className="text-primary fw-bold">
                        Click aqui
                    </Link>
                </div>
            </Form>
        </>
    )
}

export default LoginItem;