import { useState } from "react";
import ContactoForm from "./contactoForm";
import styles from './styles.module.css';

const Contactanos = () => {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación básica antes de enviar el formulario
        if (!form.first_name || !form.last_name || !form.email || !form.message) {
            alert("Todos los campos son obligatorios");
            return;
        }

        // Enviar los datos al backend
        try {
            const response = await fetch('http://localhost:8080/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Mensaje enviado con éxito");
                setForm({
                    first_name: '',
                    last_name: '',
                    email: '',
                    message: ''
                });
            } else {
                alert(data.message || "Error al enviar el mensaje");
            }
        } catch (error) {
            alert("Hubo un problema al enviar el mensaje");
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <>
            <h4 className={styles.title}>Envianos tu consulta!</h4>
            <ContactoForm
                handleSubmit={handleSubmit}
                onChange={onChange}
                form={form} />
        </>
    );
}

export default Contactanos;
