import { useState } from "react";
import RecoverPasswordItem from "./recoverdPasswordItem";
import styles from './styles.module.css';
import Swal from "sweetalert2";

const RecoverPassword = () => {
    const [email, setEmail] = useState('');

    const handlePassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://full-stack-smf0.onrender.com/api/users/recover-password", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            if (data.status === "success") {
                Swal.fire({ icon: "success", title: "Éxito", text: "Email enviado" });
            } else {
                Swal.fire({ icon: "error", title: "Error", text: `Error al enviar email:: ${data.message}` });
            }

            setEmail('');
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <>
            <h4 className={styles.margin}>Restablecer Password</h4>
            <RecoverPasswordItem
                handlePassword={handlePassword}
                email={email}
                setEmail={setEmail}
            />
        </>
    );
};

export default RecoverPassword;
