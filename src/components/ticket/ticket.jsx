import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import style from './styles.module.css';
import NotProfile from "../notProfile/notProfile";
import ProcesarCompra from "../procesarCompra/procesarCompra";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


const Ticket = () => {
    const [ticket, setTicket] = useState(null); // Inicializamos en null en lugar de []
    const [loading, setLoading] = useState(false); // Lo ponemos en false inicialmente
    const [error, setError] = useState(null);
    const { profile, setCart, setTotal } = useContext(CartContext);


    if (!profile) {
        return <NotProfile />
    }

    const profileId = profile._id;
    const cartId = profile.cart ? profile.cart._id : null;

    const handleTicket = async () => {
        setLoading(true);
        setError(null); // Reseteamos el error antes de hacer la petición

        try {
            const response = await fetch('https://full-stack-smf0.onrender.com/api/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    purchaser: profileId,
                    cart: cartId
                }),
            });

            const data = await response.json();

            if (data.status === 'success') {
                console.log('Ticket creado con éxito:', data.payload);
                setTicket(data.payload);
                // Vaciar el carrito en localStorage
                localStorage.setItem("cart", JSON.stringify([]));
                localStorage.setItem("total", JSON.stringify(0));

                // También actualizar el estado local de React
                setCart([]);
                setTotal(0);
            } else {
                console.error('Error al crear el ticket:', data.error);
                setError(data.error);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Siempre se ejecuta, éxito o error
        }
    };

    return (
        <>
            <h4 className={style.title} >
                ✅ Ticket
            </h4>

            {loading && (
                <div className={style.container}>
                    <Spinner animation="border" variant="warning" />
                    <span className="visually-hidden">Cargando...</span>
                </div>
            )}
            {error && <p className={style.error}>Error: {error}</p>}

            {ticket ? (

                <div className={style.container}>
                    <Card bg="light" text="dark" border="primary">
                        <Card.Header >Ticket Creado</Card.Header>
                        <Card.Body>
                            <Card.Title>Código: {ticket.code}</Card.Title>
                            <Card.Text>Monto: ${ticket.amount}</Card.Text>
                            <Link to={`/ticket/${ticket._id}`}>
                                <Button variant="primary" >Ver detalles</Button>
                            </Link>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            Fecha de compra: {new Date(ticket.purchaseDateTime).toLocaleString()}
                        </Card.Footer>
                    </Card>
                </div>
            ) : (
                <ProcesarCompra handleTickets={handleTicket} />
            )}

            <br></br>
            <br></br>

        </>
    );
}

export default Ticket;
