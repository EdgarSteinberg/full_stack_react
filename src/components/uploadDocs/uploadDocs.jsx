import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import NotProfile from "../notProfile/notProfile";
import UploadDocItem from "./uploadDocsItem";


const UploadDocs = () => {
  const { profile, loading } = useContext(CartContext)
  const [message, setMessage] = useState(""); // Estado para mostrar mensajes

  if (loading) return <p>Usuario no autenticado</p>;

  if (!profile) { return (<NotProfile />); }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de la página

    const formData = new FormData();
    const files = e.target.docs.files; // Obtiene los archivos del input

    if (files.length !== 2) {
      setMessage("Debes subir exactamente 2 documentos.");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      formData.append("docs", files[i]); // Agrega archivos al FormData
    }

    try {
      const response = await fetch(`http://localhost:8080/api/users/${profile._id}/documents`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await response.json();
      if (data.status === "success") {
        setMessage("¡Documentos subidos correctamente! 🎉");
        setTimeout(() => {
          window.location.href = "/"; // Redirecciona a la página de inicio
        }, 1000); // Redirige después de 1 segundo
      } else {
        setMessage("Hubo un error al subir los documentos. Inténtalo de nuevo.");
      }
    } catch (error) {
      setMessage("Error en la conexión con el servidor.");
    }
  };

  return (
    <>
      <UploadDocItem
        message={message}
        profile={profile}
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default UploadDocs;
