import tres from '../../assets/tres_estrellas.jpg'
import { Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import styles from './styles.module.css';
import { PersonCircle, Cart } from 'react-bootstrap-icons';

const HeaderItem = ({ profile, handleLinkClick, totalQuantity }) => {

    return (
        <>
            <div className={styles.header}>
                <Link to={'/'}>
                    <img src={tres} style={{ width: '60px' }} alt="logo-estrellas" />
                </Link>
                <ul className={styles.search}>
                    {/*   componente Search */}
                    <li className={styles.searchItem}>
                        <SearchBar />
                    </li>
                </ul>
                <ul className={styles.menu}>
                    {/* El carrito siempre se muestra */}
                    <li className={styles.menuItem}>
                        <Link to={'/cart'}>
                            <Badge bg="white">
                                <Cart size={30} color="black" />
                                {totalQuantity > 0 && (
                                    <span className={styles.cartItem}>
                                        {totalQuantity}
                                    </span>
                                )}
                            </Badge>
                        </Link>
                    </li>
                    {/* Si no hay usuario logueado, muestra el botón de login */}
                    {!profile ? (
                        <li className={styles.menuItem}>
                            <Badge bg="white">
                                <Link to={'/login'}>
                                    <PersonCircle size={30} color="black" />
                                </Link>
                            </Badge>
                        </li>
                    ) : (
                        <li className={styles.menuItem}>
                            <Link to={"/logout"} onClick={handleLinkClick}>Cerrar sesión</Link>
                        </li>
                    )}


                </ul>
            </div>
        </>
    )
}

export default HeaderItem