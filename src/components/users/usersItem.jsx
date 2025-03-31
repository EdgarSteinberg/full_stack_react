import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import styles from './styles.module.css';

const UsersItem = ({ users, handleDelete,handlePremium }) => {

    return (
        <div className={styles.cardContainer}>
            {users.length > 0 ? (
                users.map(user => (
                    <div key={user._id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Email: {user.email}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Nombre: {user.first_name}</ListGroup.Item>
                                <ListGroup.Item>Apellido: {user.last_name}</ListGroup.Item>
                                <ListGroup.Item>Edad: {user.age}</ListGroup.Item>
                                <ListGroup.Item>Role: {user.role}</ListGroup.Item>
                                <ListGroup.Item>Ultima Conección: {user.last_connection}</ListGroup.Item> 
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