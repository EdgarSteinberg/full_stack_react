import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const NavBar = () => {
    const categorias = ["samsung", "apple", "sony", "xiaomi", "motorola"];
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <Navbar expand="lg" className={styles.nav}>
                <Container style={{ display: 'flex' }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{ flex: 1, display: 'flex' }}>
                            {/* Menú de navegación izquierda */}
                            <div className={styles.flex}>
                                <Nav.Link as={Link} to="/" className={styles.menuLink}>Mi Tienda</Nav.Link>
                                <Nav.Link as={Link} to="/productos" className={styles.menuLink}>Smartphones</Nav.Link>
                                <Nav.Link as={Link} to="/contactanos" className={styles.menuLink}>Contactanos</Nav.Link>

                                <NavDropdown
                                    title={<span className={`${styles.menuLink} ${showDropdown ? styles.active : ''}`}>Categorías</span>}
                                    id="nav-dropdown"
                                    className={styles.menuLink}
                                    show={showDropdown}
                                    onMouseEnter={() => setShowDropdown(true)}
                                    onMouseLeave={() => setShowDropdown(false)}
                                >
                                    {categorias.map(cat => (
                                        <NavDropdown.Item
                                            as={Link}
                                            to={`/productos/category/${cat}`}
                                            key={cat}
                                            className={styles.menuLink}
                                        >
                                            {cat.toUpperCase()}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </div>
                        </Nav>

                        {/* Menú de navegación derecha */}
                        <Nav style={{ display: 'flex' }}>
                            <Nav.Link as={Link} to="/uploadDocs" className={styles.menuLink}>Acceder a Cuenta Premium</Nav.Link>
                            <Nav.Link as={Link} to="/postProduct" className={styles.menuLink}>Administrar Productos</Nav.Link>
                            <Nav.Link as={Link} to="/users" className={styles.menuLink}>Administrar Usuarios</Nav.Link>
                            <Nav.Link as={Link} to="https://full-stack-smf0.onrender.com/api/docs/#/" target="_blank" className={styles.menuLink}>Swagger</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
