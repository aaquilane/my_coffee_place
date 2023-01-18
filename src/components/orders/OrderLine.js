function OrderLine ({myorder}){

    let productString = ""
    if (myorder.products.length > 0) {
        myorder.products.forEach(prod => {
            productString = productString + `${prod.product_quantity}x  ${prod.product_name}  $${prod.product_price} / ` 
        });
    }

    return (
         <tr key={myorder.id}>
            <td>{myorder.order_id}</td>
            <td>{myorder.date}</td>
            <td>{productString === "" ? myorder.products_quantity : productString}</td>
            <td>${myorder.amount}</td>
            <td>{myorder.fulfillment} </td>
            <td>{myorder.payment_method} </td>
        </tr>
    )
}

export default OrderLine