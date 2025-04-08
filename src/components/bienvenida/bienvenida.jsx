import Carousel from 'react-bootstrap/Carousel';
import apple from '../../assets/apple_carrusel.jpg';
import samsung from '../../assets/samsung_carrusel.jpg';
import sony from '../../assets/sony_carrusel.webp';
import Categories from "../categories/categories";
import Filtros from "../filtros/filtros";
import styles from './styles.module.css';
import { useState, useEffect } from "react";
import SkeletonCard from "../skeleton_card/skeleton_card";

const Bienvenida = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catRes, filtRes] = await Promise.all([
                    fetch("https://full-stack-smf0.onrender.com/api/categories"),
                    fetch("https://full-stack-smf0.onrender.com/api/products")
                ]);

                if (!catRes.ok || !filtRes.ok) {
                    throw new Error("Error al cargar los datos");
                }

                const catData = await catRes.json();
                const filtData = await filtRes.json();

                setCategories(catData.payload); // Ajustar según estructura real de tu JSON
                setFilters(filtData.payload);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Carousel style={{ width: "80%", margin: "0 auto" }}>
                <Carousel.Item style={{ height: "29vh" }}>
                    <img
                        className="d-block w-100"
                        src={samsung}
                        alt="Samsung"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>Samsung Galaxy Series</h3>
                        <p>Innovación, potencia y diseño en cada dispositivo.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "29vh" }}>
                    <img
                        className="d-block w-100"
                        src={apple}
                        alt="Apple"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>Apple iPhone</h3>
                        <p>El equilibrio perfecto entre rendimiento y elegancia.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "29vh" }}>
                    <img
                        className="d-block w-100"
                        src={sony}
                        alt="Sony"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>Sony Xperia</h3>
                        <p>Calidad de imagen, sonido y resistencia inigualables.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {loading ? (
                <div className={styles.item}>
                    <SkeletonCard />
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <Filtros filters={filters} />
                    </div>
                    <div className={styles.content}>
                        <Categories categories={categories} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Bienvenida;
