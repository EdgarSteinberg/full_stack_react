import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <>
            <h1>pagina no encontrada</h1>

            <Link to={"/"}>
                <button>Volver al incio</button>
            </Link>
        </>
    )
}

export default NotFound