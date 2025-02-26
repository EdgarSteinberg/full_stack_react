import { Link } from "react-router-dom"


const NavBar = ({ handleLogout }) => {
    const categorias = [
        "samsung",
        "apple",
        "sony",
        "xiaomi",
        "motorola"
    ]

    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <Link to={"/"}>Bienvenida</Link>
            <Link to={"/productos"}>Productos</Link>
            <Link to={"/cart"}>Carrito</Link>
            <Link to={"/postProduct"}>PostProduct</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/Register"}>register</Link>
            <Link to={"/contacto"}>Contacto</Link>
            <Link to={"/productos/category"}>Categorias</Link>
             {
                categorias.map(cat =>
                    <Link key={cat} to={`productos/category/${cat}`}>
                        {cat}
                    </Link>
                )
            } 
              <Link to="/login" onClick={handleLogout}>Cerrar sesión</Link>
        </div>
    )   
}

export default NavBar