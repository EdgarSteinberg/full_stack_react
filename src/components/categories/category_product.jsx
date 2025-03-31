import styles from './styles.module.css';
import Category_products1 from './category_products1';


const CategoryProduct = ({ products }) => {

    return (
        <>
            <div className={styles.container}>
                {products.map(product => (
                    <Category_products1
                        key={product._id}
                        product={product}
                        style={{ textAlign: "center", cursor: "pointer" }}
                    />
                ))}
            </div>
        </>
    )
}

export default CategoryProduct;