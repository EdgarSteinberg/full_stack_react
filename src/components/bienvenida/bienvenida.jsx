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

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, []);


    return (
        <>

            <Carousel style={{ width: "80%", margin: "0 auto" }}>
                {/* Samsung */}
                <Carousel.Item style={{ height: "29vh" }}>
                    <img
                        className="d-block w-100"
                        src={samsung}
                        alt="Samsung - Innovación en cada detalle"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>Samsung Galaxy Series</h3>
                        <p>Innovación, potencia y diseño en cada dispositivo.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Apple */}
                <Carousel.Item style={{ height: "29vh" }}>
                    <img
                        className="d-block w-100"
                        src={apple}
                        alt="Apple - Tecnología y elegancia"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>Apple iPhone</h3>
                        <p>El equilibrio perfecto entre rendimiento y elegancia.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Sony */}
                <Carousel.Item style={{ height: "29vh" }}>
                    <img
                        className="d-block w-100"
                        src={sony}
                        alt="Sony - Calidad e innovación"
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
                        <Filtros />
                    </div>
                    <div className={styles.content}>
                        {/*Componente categories*/}
                        <Categories />
                    </div>
                </div>
            )}


        </>
    );
};

export default Bienvenida;
