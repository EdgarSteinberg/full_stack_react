import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "react-bootstrap-icons"; // Ícono de lupa
import styles from './styles.module.css';

const SearchBar = ({ productos }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/productos?search=${query}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
            />
            {/* Ícono de lupa como botón */}
            <Search
                className={styles.searchIcon}
                size={20}
                onClick={handleSearch} // Ejecuta la búsqueda al hacer clic
            />
        </form>
    );
};

export default SearchBar;
