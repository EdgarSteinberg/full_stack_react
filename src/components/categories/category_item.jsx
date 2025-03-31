import styles from './styles.module.css';
import Category_item1 from './category_item1';

const CategoryItem = ({ categories }) => {

    return (
        <>
            <div className={styles.container}>
                {categories.map(cat => (
                   <Category_item1 key={cat._id} cat={cat}/>
                ))}
            </div>
        </>
    )
}

export default CategoryItem;