import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { PersonCircle } from 'react-bootstrap-icons';
import { Button, Card, Form } from "react-bootstrap";



const UploadDocItem = ({ profile,message, handleSubmit }) => {

    return (
        <>  
        <h4 className={styles.title}>Cuenta Premium</h4>
            {profile.role === "admin" || profile.role === "premium" ? (
                <div>
                    <div className={styles.container}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className={styles.container}>
                                <Card.Title><PersonCircle size={50} color="black" /></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">¡Ya eres un usuario premium!</Card.Subtitle>
                                <Card.Text>
                                    No necesitas subir más documentos.
                                </Card.Text>
                                <Card.Link href="/" >Inicio</Card.Link>
                                <Card.Link href="/productos">Smartphones</Card.Link>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className={styles.container}>
                        <br></br>
                        <Link to="/"  >
                            <Button >
                                Volver a la página principal
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    {profile.documents.length === 2 ? (
                        <div className={styles.container}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body className={styles.container}>
                                    <Card.Title><PersonCircle size={50} color="black" /></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Tienes los documentos enviados</Card.Subtitle>
                                    <Card.Link href="/" >Inicio</Card.Link>
                                    <Card.Link href="/productos">Smartphones</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>

                    ) : (
                        <div className={styles.container}>
                            <Card className={styles.card}>
                                <Card.Body>
                                    <Card.Title>¡Convierte tu cuenta en Premium!</Card.Title>
                                    <Card.Text>
                                        Accede a todos los beneficios de una cuenta Premium subiendo los documentos necesarios.
                                        Por favor, asegúrate de cargar exactamente 2 archivos para completar la verificación.
                                    </Card.Text>
                                    <form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Sube tus documentos</Form.Label>
                                            <Form.Control
                                                type="file"
                                                name="docs"
                                                id="docs"
                                                accept="image/*"
                                                multiple
                                                required
                                            />
                                        </Form.Group>
                                        <div className={styles.btn}>
                                            <Button type="submit" variant="success">Enviar Documentos</Button>
                                        </div>
                                    </form>
                                    {message && <p style={{ color: "green" }}>{message}</p>}
                                </Card.Body>
                            </Card>
                        </div>

                    )}
                </>
            )}
        </>
    )
}

export default UploadDocItem;