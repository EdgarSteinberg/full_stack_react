import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import ProductItem from './productItem';


const ProductListItem = ({  handleDelete }) => {
    const {products} = useContext(CartContext);
    return (
        <>
            {
                products.map(pr => {
              
                    return (
                       <ProductItem key={pr._id} handleDelete={handleDelete} pr={pr}/>
                    );
                })
            }
        </>
    );
};

export default ProductListItem;
