import { Link } from "react-router-dom";

const Bienvenida = () => {
    return (
        <>
            <h1>Bienvenido a mi Ecommerce</h1>
            <Link to="/productos/category/">
                <button>Click Para ingresar a la plataforma</button>
            </Link>
        </>
    );
};

export default Bienvenida;
