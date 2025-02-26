import { useState } from "react";
import styles from './styles.module.css'

const Count = ({ onAdd }) => {
    const [count, setCount] = useState(1);

    const addCount = () => {
        setCount(count + 1);
    }

    const subtractCount = () => {
        count > 1 && setCount(count - 1);
    }

    const resetCount = () => {
        setCount(1);
    }

    const addProductToCart = () => {
        count > 0 && onAdd(count);
    }
    return (
        <>
            <div className={styles.botones}>
            <button onClick={subtractCount}>-</button>
            <p>{count}</p>
            <button onClick={addCount}>+</button>
            </div>
            <br></br>
            <button onClick={resetCount}>Reiniciar</button>
            <br></br>
            <button onClick={addProductToCart}>Agregar Al carrito</button>
        </>
    )
}

export default Count;