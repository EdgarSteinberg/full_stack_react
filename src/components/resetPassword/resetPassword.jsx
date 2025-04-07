import { useState } from "react";
import ResetPasswordItem from "./resetPasswordItem";
import Swal from "sweetalert2";
import { useSearchParams  } from "react-router-dom";

const ResetPassword = () => {
    const [password, setPassword] = useState('');

    // Obtener el token desde la query de la URL
    const [searchParams] = useSearchParams();  
    const token = searchParams.get("token");  
 

    const handlePassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/users/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token, newPassword: password })
            });

            const data = await response.json();

            if (data.status === "success") {
                Swal.fire({ icon: "success", title: "Éxito", text: "Contraseña creada correctamente" })
                .then(() => {
                    window.location.href = "/login"; // Redirigir a la página de login
                });
            } else {
                Swal.fire({ icon: "error", title: "Error", text: "Hubo un error al actualizar la contraseña" });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ResetPasswordItem
            handlePassword={handlePassword}
            password={password}
            setPassword={setPassword}
        />
    );
};

export default ResetPassword;
