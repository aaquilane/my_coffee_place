import { db } from "../../db/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import EmptyEntity from "../EmptyEntity.js";
import OrderLine from "./OrderLine.js";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Loading from "../Loading.js";
function Orders(){

    const [endLoading, setEndLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const ordersCollectionRef = collection(db, "orders");

    const getOrders = async () => {
        const data = await getDocs(ordersCollectionRef);
        setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setEndLoading(true);
    };

    useEffect(() => {
        getOrders();
    }, []);

    if (!endLoading)
        return <Loading/>
    else
        if (orders.length == 0)
            return <EmptyEntity message = {"You haven't made a purchase yet"} />
        else
            return (
            <Container > 
                <h4> My purchases </h4>
                <Table responsive="sm" striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Products</th>
                            <th>Total</th>
                            <th>Fulfillment</th>
                            <th>Payment method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, i) => {
                            return <OrderLine key={order.id} myorder={order} />;
                        })}
                    </tbody>
                </Table>   
            </Container>
        )
}

export default Orders