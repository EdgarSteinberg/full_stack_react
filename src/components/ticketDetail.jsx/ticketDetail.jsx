import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TicketItem from "./ticketItem";


const TicketDetail = () => {
    const { id } = useParams(); // Obtener el ID del ticket desde la URL
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://full-stack-smf0.onrender.com/api/tickets/${id}`) // Usar ticketId en la URL
            .then(response => response.json())
            .then(data => {
                console.log("Datos del ticket:", data);
                setTicket(data.payload);
            })
            .catch(error => console.error("Error al obtener el ticket:", error.message))
            .finally(() => setLoading(false));
    }, [id]); // Dependencia correcta

    if (loading) return <p>...cargando</p>;
    if (!ticket) return <p>No se encontró el ticket.</p>;

    return (
       <TicketItem ticket={ticket}/>
    );
};

export default TicketDetail;
