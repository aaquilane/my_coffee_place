import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartProductLine from "./CartProductLine";
import Checkout from "../checkout/Checkout";
import EmptyEntity from "../EmptyEntity";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function CartDetail (){
    
    const {cartQuantity, cartPrice, cartProducts } = useContext(CartContext);

    if (cartQuantity == 0) 
        return (
            <Container > 
                <EmptyEntity message = {"Your cart is empty!"} />
            </Container>
        )
    else
        return (
            <Container > 
                <h4> Order summary </h4>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProducts.length > 0 && cartProducts.map((product, i) => {
                        return <CartProductLine key={product.product_id} product={product}></CartProductLine>
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td><h5>Total</h5></td>
                            <td><h5>${cartPrice}</h5> </td>
                            <td> </td>
                        </tr>
                    </tbody>
                </Table>
                <Checkout/>   
                
                     
            </Container>
        )
}

export default CartDetail