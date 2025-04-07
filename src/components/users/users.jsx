import { useContext, useEffect, useState } from "react";
import SkeletonCard from "../skeleton_card/skeleton_card";
import UsersItem from "./usersItem";
import styles from './styles.module.css';
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/cartContext";
import NotProfile from "../notProfile/notProfile";
import Swal from "sweetalert2";

const Users = () => {
    const [users, setUsers] = useState([]);  // Cambié `user` a `users` (es un array)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { profile } = useContext(CartContext);

    if (!profile || profile.role !== "admin") {
        return <NotProfile />;
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/users')
            .then(async response => {
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Error al obtener los usuarios");
                }
                return response.json();
            })
            .then(data => {
                console.log(data.payload);
                setUsers(data.payload);
            })
            .catch(error => {
                setError(error.message);
                alert(error.message);  // Mostrar el error correctamente
            })
            .finally(() => setLoading(false));

    }, []);

    const handleDelete = async (uid) => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/${uid}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json(); // Asegurar que se obtiene el JSON

            if (data.status === "success") {
                Swal.fire({ icon: "success", title: "Éxito", text: "Usuario eliminado correctamente" });
                setUsers(users.filter(user => user._id !== uid)); // Actualizar el estado tras eliminar
            } else {
                throw new Error(data.message || "Error al eliminar el usuario");
            }

        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
            Swal.fire({ icon: "error", title: "Error", text: `Ocurrió un error: ${error.message}` });
        }
    };

    const handlePremium = async (uid, currentRole) => {
        try {
            const newRole = currentRole === "user" ? "premium" : "user"; // Alternar rol

            const response = await fetch(`http://localhost:8080/api/users/premium/${uid}`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ role: newRole })  // Enviar el rol en un objeto
            });

            const data = await response.json();

            if (data.status === "success") {  // Asegúrate de que el backend devuelve "status"
                Swal.fire({ icon: "success", title: "Éxito", text: "Rol de usuario actualizado" });

                setUsers(prevUsers =>
                    prevUsers.map(user =>
                        user._id === uid ? { ...user, role: newRole } : user
                    )
                );
            } else {
                throw new Error(data.message || "Error al actualizar el rol del usuario");
            }
        } catch (error) {
            console.error("Error al actualizar el rol:", error);
            Swal.fire({ icon: "error", title: "Error", text: `Ocurrió un error: ${error.message}` });

        }
    };
    const handleAllDelete = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/users", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            if (data.status === "success") { // Cambié la condición
                Swal.fire({ icon: "success", title: "Éxito", text: "Usuarios eliminados correctamente" });

                window.location.href = "http://localhost:5173/users";
            } else {
                setError(data.message || "Error al eliminar los usuarios");
            }
        } catch (error) {
            console.error("Error al eliminar los usuarios:", error);
            setError(error.message);
            Swal.fire({ icon: "error", title: "Error", text: `Ocurrió un error: ${error.message}` });

        }
    };


    if (loading) return <div className={styles.itemListContainer}> <SkeletonCard /></div>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <>
            <h4 className={styles.title}>Administrar Usuarios</h4>
            {/* Botón para eliminar usuarios inactivos */}
            <Button variant="danger" onClick={handleAllDelete} className={styles.deleteAllButton}>
                Eliminar Usuarios Inactivos
            </Button>

            {/* Componente UsersItem que muestra los usuarios */}
            <UsersItem
                users={users}
                handleDelete={handleDelete}
                handlePremium={handlePremium}
            />
        </>
    );
};

export default Users;
