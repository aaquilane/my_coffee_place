import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import CartProductLine from '../cart/CartProductLine';

function OrderDetail ({myOrder}){
    return (
        <Container > 
                <br></br>
                <h4> Order detail </h4>
                <h5> myOrder.date</h5>
                <h6> Products </h6>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {myOrder.products.length > 0 && myOrder.products.map((product, i) => {
                        return <CartProductLine key={product.product_id} product={product}></CartProductLine>
                        })}

                        <tr>
                            <td></td>
                            <td></td>
                            <td>TOTAL</td>
                            <td>${myOrder.amount} </td>
                            <td> </td>
                        </tr>
                    </tbody>

                </Table>
                
            </Container>
    )
}

export default OrderDetail