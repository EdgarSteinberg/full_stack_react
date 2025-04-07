import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import styles from './styles.module.css';

const UsersItem = ({ users, handleDelete, handlePremium }) => {
    console.log("users", users)
    return (
        <div className={styles.cardContainer}>
            {users.length > 0 ? (
                users.map(user => (
                    <div key={user._id}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Header><strong>Email: {user.email}</strong></Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Nombre: {user.first_name}</ListGroup.Item>
                                <ListGroup.Item>Apellido: {user.last_name}</ListGroup.Item>
                                <ListGroup.Item>Edad: {user.age}</ListGroup.Item>
                                <ListGroup.Item><strong>Role: {user.role}</strong></ListGroup.Item>
                                <ListGroup.Item>Ultima Conección: {user.last_connection}</ListGroup.Item>
                                <ListGroup.Item style={{ color: user.documents.length > 0 ? "green" : "red" }}>
                                    {user.documents.length > 0 ? "Documentos Enviados" : "No tiene documentos"}
                                </ListGroup.Item>
                                <Button variant="warning" onClick={() => handlePremium(user._id, user.role)}>Actualizar Role</Button>
                                <Button variant="danger" onClick={() => handleDelete(user._id)}>Eliminar</Button>
                            </ListGroup>
                        </Card>
                    </div>
                ))
            ) : (
                <p>No hay usuarios disponibles</p>
            )}

        </div>
    )
}

export default UsersItem;