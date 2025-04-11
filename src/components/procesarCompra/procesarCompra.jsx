import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import ProcesarCompraForm from './procesarCompraForm';
import Swal from "sweetalert2";


const ProcesarCompra = ({ handleTickets, loading }) => {
    const { cart } = useContext(CartContext);


    // Generar el string con todos los títulos y precios
    const cartDetails = cart.map(item => `${item.title} - $${item.price} -${item.quantity}`).join("\n");

    // Calcular el total del carrito
    const totalAmount = cart.reduce((acc, item) => acc + item.total, 0);

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        confirm_email: '',
        phone: '',
        cart_info: cartDetails,
        total_price: totalAmount
    });

    const [emailMatch, setEmailMatch] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !form.first_name.trim() ||
            !form.last_name.trim() ||
            !form.email.trim() ||
            !form.confirm_email.trim() ||
            !emailMatch
        ) {
            Swal.fire({ icon: "error", title: "Error", text: "Por favor completa todos los campos obligatorios y asegúrate de que los correos coincidan." });
            return;
        }

        //console.log(form);
        //console.log("Ejecutando handleTicket...");
        // Aquí llamamos a handleTicket después de validar el formulario
        handleTickets();

        setForm({
            first_name: '',
            last_name: '',
            email: '',
            confirm_email: '',
            phone: '',
            cart_info: '',
            total_price: ''
        });

        setEmailMatch(true);
    };

    const onChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));

        if (name === "confirm_email") {
            setEmailMatch(value === form.email);
        }
    };

    return (
        <>
          {!loading && (
            <ProcesarCompraForm
              handleSubmit={handleSubmit}
              form={form}
              onChange={onChange}
              emailMatch={emailMatch}
            />
          )}
        </>
      );

};

export default ProcesarCompra;

