import Card from "react-bootstrap/Card";
import styles from "./styles.module.css";

const TicketItem = ({ticket}) => {

    return (
        <>
            <div className={styles.cardContainer}>
                <Card style={{ width: "24rem" }}>
                    <Card.Body>
                        <Card.Title>Código: {ticket.code}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Fecha: {new Date(ticket.purchaseDateTime).toLocaleString()}
                        </Card.Subtitle>
                        <Card.Text>
                            <strong>Monto:</strong> ${ticket.amount}
                            <br />
                            <strong>Comprador:</strong> {ticket.purchaser.first_name} {ticket.purchaser.last_name}
                            <br />
                            <strong>Email:</strong> {ticket.purchaser.email}
                            <br />
                            <strong>Productos:</strong>
                            <ul>
                                {ticket.cart.map((item) => (
                                    <li key={item._id}>
                                        <strong>Producto:</strong> {item.product.title} <br />
                                        <strong>Descripción:</strong> {item.product.description} <br />
                                        <strong>Precio:</strong> ${item.product.price} <br />
                                        <strong>Cantidad:</strong> {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default TicketItem;