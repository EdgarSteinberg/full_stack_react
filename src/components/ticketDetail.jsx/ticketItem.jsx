import Card from "react-bootstrap/Card";
import styles from "./styles.module.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

const TicketItem = ({ ticket }) => {
    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    const toggleDescription = (id) => {
        setExpandedDescriptions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
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
                                    <strong>Descripción:</strong>{" "}
                                    {expandedDescriptions[item._id]
                                        ? item.product.description
                                        : `${item.product.description.slice(0, 100)}...`}
                                    <Button
                                        variant="link"
                                        onClick={() => toggleDescription(item._id)}
                                    >
                                        {expandedDescriptions[item._id] ? "Ver menos" : "Ver más"}
                                    </Button>
                                    <br />
                                    <strong>Precio:</strong> ${item.product.price} <br />
                                    <strong>Cantidad:</strong> {item.product.quantity}
                                </li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
export default TicketItem;