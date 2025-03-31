import { useState } from 'react';
import RegisterItem from './registerItem';

const Register = () => {
    const handleLoginWithGitHub = () => {
        window.location.href = "http://localhost:8080/api/github";
    };

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        age: '',
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });

            const data = await response.json();

            if (!response.ok) {
                setErrorMessage(data.message)
            }

            if (data.status === 'success') {
                window.location.href = '/login';
            } else {
                setErrorMessage(data.message || 'Error al registrar usuario.');
            }
        } catch (error) {
            setErrorMessage('Hubo un problema con el registro. Inténtalo de nuevo.');
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <RegisterItem
                form={form}
                handleSubmit={handleSubmit}
                handleOnChange={handleOnChange}
                handleLoginWithGitHub={handleLoginWithGitHub}
                errorMessage={errorMessage}
            />
        </>
    );
};

export default Register;
