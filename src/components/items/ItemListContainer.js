import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";

function ItemListContainer({menu}) {
    let { categoryName } = useParams();
    let category_products = menu.filter(product => product.category_name === categoryName)

    return <ItemList category={category_products}></ItemList>       
    
}
export default ItemListContainer