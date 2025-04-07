import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import LoginItem from "./loginItem";

const Login = () => {
    const { login } = useContext(CartContext);

    const [errorMessage, setErrorMessage] = useState('');

    const [form, setForm] = useState({
        email: '',
        password: ''
    });


    const handleLoginWithGitHub = () => {
        window.location.href = "https://full-stack-smf0.onrender.com/api/github";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage(''); // Resetear error antes de intentar loguear

        try {
            const response = await fetch('https://full-stack-smf0.onrender.com/api/users/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
                credentials: 'include',
            });


            const data = await response.json();
    
            if (data.status === "success") {
                login(data.payload); // Guardar sesión en el contexto
                window.location.href = "https://mobilematrix.netlify.app/";
            } else {
                setErrorMessage(data.error || "Error desconocido");
            }

            if (data.status === "success") {
                window.location.href = "https://mobilematrix.netlify.app/";
            }

        } catch (error) {
            console.error(error);
            setErrorMessage(error.message); // Aquí sí puedes acceder a error.message
        }
    };

    return (
        <>
            <LoginItem
                handleSubmit={handleSubmit}
                form={form} handleChange={handleChange}
                handleLoginWithGitHub={handleLoginWithGitHub}
                errorMessage={errorMessage}
            />
        </>
    );
};

export default Login;
