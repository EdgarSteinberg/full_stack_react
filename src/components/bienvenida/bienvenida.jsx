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

            <Carousel style={{ width: "80%", margin: "0  auto" }}>
                <Carousel.Item style={{ height: "29vh" }}>
                    <img
                        className="d-block w-100"
                        src={samsung}
                        alt="First slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "29vh" }}>
                    <img
                        className="d-block w-100"
                        src={apple}
                        alt="Second slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "29vh" }}>
                    <img
                        className="d-block w-100"
                        src={sony}
                        alt="Third slide"
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
