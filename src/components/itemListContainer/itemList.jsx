import Item from "./item";

const ItemList = ({products}) => {

    return(
        <>
            {
                products.map(pr =>
                    <Item key={pr._id} {...pr} />
                )
            }
        </>
    )
}

export default ItemList;