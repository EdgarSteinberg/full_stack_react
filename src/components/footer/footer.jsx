import { Linkedin, Github, Envelope, Globe } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <Card className="mt-4">
            <Card.Header className="text-center">¡Conéctate conmigo!</Card.Header>
            <Card.Body className={styles.cardContainer}>
                <Card.Text>
                    Encuéntrame en mis redes o envíame un correo si tienes alguna consulta.
                </Card.Text>
                <div className={styles.iconos}>
                    <a href="https://www.linkedin.com/in/edgar-steinberg-378183239/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={30} style={{ color: 'black' }} />
                    </a>
                    <a href="https://github.com/EdgarSteinberg/" target="_blank" rel="noopener noreferrer">
                        <Github size={30} style={{ color: 'black' }} />
                    </a>
                    <a href="https://mobilematrix.netlify.app/contactanos">
                        <Envelope size={30} style={{ color: 'black' }} />
                    </a>
                    <a href="https://edgar-steinberg-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Globe size={30} style={{ marginRight: "10px", color: "black" }} />
                    </a>
                </div>
            </Card.Body>
            <Card.Footer className="text-center">
                © {new Date().getFullYear()} Edgar Steinberg. Todos los derechos reservados.
            </Card.Footer>
        </Card>
    );
}

export default Footer;
