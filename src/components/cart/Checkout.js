import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useState } from "react";
import { db } from "../../db/firebase-config.js";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'


function Checkout () {
    const {cartQuantity, cartPrice, cartProducts, emptyCart } = useContext(CartContext);

    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({});
    const ordersCollectionRef = collection(db, "orders");

    const [inputName, setInputName] = useState("");
    const [inputMail, setInputMail] = useState("");
    const [inputRepeatMail, setInputRepeatMail] = useState({
        value: "",
        errMessage: "",
      })
    const [inputPhone, setInputPhone] = useState("");
    const [inputFulfillment, setInputFulfillment] = useState("Pick up");
    const [inputPaymentMethod, setInputPaymentMethod] = useState("Cash");

    const handleFulfillment = e => {
        setInputFulfillment (e.target.value)
    }
    
    const handlePaymentMethod = e => {
        setInputPaymentMethod (e.target.value)
    }

    function handleEmail (mail1, mail2) {
        let errMessage = ""
        if (mail1==="" || mail2==="")
            errMessage = "Email address can't be empty. Please try again"
        else
            if(mail1 !== mail2 ) 
                errMessage = "The email addresses don't match. Please try again"
        setInputRepeatMail((prevState) => ({ ...prevState, errMessage }));
    }

    function formatToday(){
        const mydate =  new Date().toLocaleDateString('en-US')
        return mydate
    }

    const addOrder = async (e) => {
        e.preventDefault();

        //Configure new order
        const myOrder = {
            order_id: Math.random().toString().substring(3),
            user_email : inputMail,
            user_name : inputName,
            user_phone : inputPhone,
            date: formatToday(),
            products : cartProducts,
            amount : cartPrice,
            products_quantity : cartQuantity,
            fulfillment : inputFulfillment,
            payment_method : inputPaymentMethod
        }

        //Save order in DB, save order in state, show alert
        const ordersCollectionRef = collection(db, "orders");
        await addDoc(ordersCollectionRef, myOrder).then(({ id }) => {
            setOrder(myOrder);
            const msg = `Congratulations! Your purchase #${id} has been confirmed!`    
            console.log(msg);
            
            Swal.fire({
                icon: "success",
                title: "Contratulations!",
                text: `Your purchase #${id} has been confirmed!` ,
                allowOutsideClick: false,
                confirmButtonColor: '#f0ad4e',
                confirmButtonText: 'Continue'
              }).then(function() {
                    window.location.href = "/";         
            });
        });
        const data = await getDocs(ordersCollectionRef);
        setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                 
        //Empty cart to start again
        emptyCart();
        setInputName("");
        setInputMail("");
        setInputRepeatMail("");
        setInputPhone("");
        setInputFulfillment("Pick up");
        setInputPaymentMethod("Cash");

    };


    return (
        <>
        <Container>
            <br></br>
            <h4> Please complete your contact info</h4>
            <Row>
                <Col>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="First and last name" id="inputName" 
                            onChange={(e) => setInputName(e.target.value)}
                            value={inputName}
                        />
                    </div>
                </Col>
                <Col>
                    <div className="mb-3">
                        <input type="text" className="form-control"  placeholder="Contact phone" id="inputPhone"
                        onChange={(e) => setInputPhone(e.target.value)}
                        value={inputPhone}
                        />   
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="mb-3">
                        <input type="text" className="form-control"  placeholder="Email address" id="inputMail"
                            onChange={(e) => setInputMail(e.target.value)}
                            onBlur={(e) => handleEmail(e.target.value, inputRepeatMail.value)}
                            value={inputMail}
                        />
                    </div>
                </Col>
                <Col>
                    <div className="mb-3">
                        <input type="text" className="form-control"  placeholder="Repeat your email address"  id="inputRepeatMail"
                            // onChange={(e) => handleEmail(inputMail, e.target.value )}
                            onChange={(e) => setInputRepeatMail(e.target.value,"")}

                            onBlur={(e) => handleEmail(inputMail, e.target.value )}
                            value={inputRepeatMail.value}   
                        />
                        <p><font color="red"> {inputRepeatMail.errMessage}</font></p>
                    </div>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <h4> How you'll get your order?</h4>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Pick up" checked={inputFulfillment === "Pick up"} name="radioFulfillment" id="radioPickup" 
                            onChange={handleFulfillment}/>
                            <label>PICK UP</label>
                            <p>Estimated ready time: 30 min</p>
                        <input className="form-check-input" type="radio" value="Delivery" checked={inputFulfillment === "Delivery"} name="radioFulfillment" id="radioDelivery" 
                            onChange={handleFulfillment}/>
                            <label>DELIVERY</label>
                            <p>Estimated delivery time: 40 min</p>                
                    </div>     
                </Col>

                <Col>
                    <h4> Choose your payment method</h4>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Cash" checked={inputPaymentMethod === "Cash"}  name="radioPayment" id="radioCash" 
                            onChange={handlePaymentMethod}/>
                            <label>CASH</label>
                    </div>
                    <div className="form-check">

                        <input className="form-check-input" type="radio" value="Credit card" checked={inputPaymentMethod === "Credit card"} name="radioPayment" id="radioCredit" 
                            onChange={handlePaymentMethod}/>
                            <label>CREDIT CARD</label>
                    </div>
                    <div className="form-check">
                        
                        <input className="form-check-input" type="radio" value="Debit card" checked={inputPaymentMethod === "Debit card"} name="radioPayment" id="radioDebit" 
                            onChange={handlePaymentMethod}/>
                            <label>DEBIT CARD</label>
                    </div>                 
                </Col>
            </Row>
            
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-warning btn-lg" onClick={addOrder}>Purchase ${cartPrice} </button>
            </div>

        </Container>
        </>
    )
}

export default Checkout