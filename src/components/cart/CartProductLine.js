import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartProductLine({product}) {
    const { removeProduct } = useContext(CartContext);
    const handleRemoveProduct = () => removeProduct (product)

    return(
            <tr>
                <td>{product.product_name}</td>
                <td>{product.product_quantity}</td>
                <td>${product.product_price}</td>
                <td>${product.product_subtotal} </td>
                <td><button className="btn btn-outline-danger" onClick={handleRemoveProduct}>Remove</button></td>
            </tr>
    )
}

export default CartProductLine