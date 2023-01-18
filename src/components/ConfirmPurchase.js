import { useContext } from "react";
import { PurchaseContext } from "./contexts/PurchaseContext";
import { useState } from "react";
import { db } from "../db/firebase-config.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

function ConfirmPurchase(){
    const {myPurchase} = useContext(PurchaseContext);

    console.log ("My purchase obtenida del context", myPurchase)

    const saveOrder = (e) =>{
            //Save order en DB, save order in state
            const ordersCollectionRef = collection(db, "orders");
            //  await addDoc(ordersCollectionRef, myOrder).then(({ id }) => {
            addDoc(ordersCollectionRef, myPurchase).then(({ id }) => {

                const msg = `Congratulations! Your purchase #${myPurchase.order_id} has been confirmed!`    
                console.log(msg);

            });
            // //  const data = await getDocs(ordersCollectionRef);
            //  const data =  getDocs(ordersCollectionRef);

            //  setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                
            //  setPurchaseOk(true);
    }
    
    

    return (
        <> 
            <h1> Confirmacion de compra</h1>
            <h1> {myPurchase.order_id}</h1>
            <h1> {myPurchase.email}</h1>
            <h1> {myPurchase.fulfillment}</h1>
            <button onClick={saveOrder}> guardar</button>


        </>
    )
}

export default ConfirmPurchase