import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import { redirect, useFetcher } from "react-router-dom";

function ShowConfirmation({ myOrder, showSuccess, onCleanCart }) {
  const [show, setShow] = useState(showSuccess);
  useEffect(() => {
    setShow(showSuccess);
  }, [showSuccess]);
  const handleClose = () => setShow(false);
  // // const handleShow = () => setShow(true);

  // console.log ("Show confirmation order id: ", myOrder.order_id)

  // myOrder.order_id !=="" && setShow(true)

  // console.log ("Setshow:", show)
  const redirectHome = () => {
    onCleanCart();
    window.location.href = "/";
  };

  return (
    <Modal show={show} onHide={redirectHome}>
      <Modal.Header closeButton>
        <Modal.Title>Congratulations!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your purchase {myOrder.order_id} has been confirmed!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={redirectHome}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowConfirmation;
