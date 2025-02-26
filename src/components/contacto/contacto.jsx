import React from "react";

const Contacto = ({ formData = {}, onChange, validateForm, errors = {} }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm && validateForm();
    };

    return (
        <form onSubmit={handleSubmit}>

                <label htmlFor="name">Nombre</label>
                <br />
                <input
                    type="text"
                    name="nombre"
                    id="name"
                    placeholder="Ingrese su nombre"
                    value={formData.nombre || ""} // Evita valores undefined
                    onChange={onChange} // Necesario para hacerlo mutable
                />
                {errors?.nombre && <div style={{ color: "red" }}>{errors.nombre}</div>}
         
         
                <label htmlFor="email">Email</label>
                <br />
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Ingrese su email"
                    value={formData.email || ""} // Evita valores undefined
                    onChange={onChange} // Necesario para hacerlo mutable
                />
                {errors?.email && <div style={{ color: "red" }}>{errors.email}</div>}
      
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Contacto;
