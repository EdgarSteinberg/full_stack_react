import styles from './styles.module.css';
import Item from "./item";

const ItemList = ({products}) => {

    return(
        <div className={styles.container}>
            {
                products.map(pr =>
                    <Item key={pr._id} {...pr} />
                )
            }
        </div>
    )
}

export default ItemList;