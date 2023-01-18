import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Toast from 'react-bootstrap/Toast';

function ShowConfirmation({myOrder}){
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // // const handleShow = () => setShow(true);


    // console.log ("Show confirmation order id: ", myOrder.order_id)

    // myOrder.order_id !=="" && setShow(true)

    // console.log ("Setshow:", show)
    
    // return (
    //     <>
    //     <Modal show={show} onHide={handleClose}>
    //         <Modal.Header closeButton>
    //             <Modal.Title>Congratulations!</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>Your purchase {myOrder.order_id} has been confirmed!</Modal.Body>
    //         <Modal.Footer>
    //             <Button variant="secondary" onClick={handleClose}>
    //                 Close
    //             </Button>
    //         </Modal.Footer>
    //     </Modal>
    //     </>
    // )


    <Toast>
    <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Congratulations</strong>
    </Toast.Header>
    <Toast.Body>Your purchase has been confirmed!</Toast.Body>
    </Toast>
}

export default ShowConfirmation