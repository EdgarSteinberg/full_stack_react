import React, { useState } from "react";
import Contacto from "./contacto";

const ContactoContainer = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nombre) {
            newErrors.nombre = "El nombre es requerido";
        }
        if (!formData.email) {
            newErrors.email = "El email es requerido";
        }
        setErrors(newErrors);
    };

    return (
        <Contacto
            formData={formData}
            onChange={handleChange}
            validateForm={validateForm}
            errors={errors}
        />
    );
};

export default ContactoContainer;
