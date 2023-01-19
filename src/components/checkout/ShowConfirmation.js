import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import success from "../images/success-circle-outline.png";
import './ShowConfirmation.css';

function ShowConfirmation({ myOrder, showSuccess, onCleanCart }) {
  const [show, setShow] = useState(showSuccess);

  useEffect(() => {
    setShow(showSuccess);
  }, [showSuccess]);
  
  const handleClose = () => setShow(false);
  
  const redirectHome = () => {
    onCleanCart();
    window.location.href = "/";
  };

  return (
    <Modal show={show} onHide={redirectHome}>
      <Modal.Header closeButton>
        <Modal.Title>Congratulations!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <p>Your purchase <b>{myOrder.order_id}</b> has been confirmed!</p>
          <div className="img-container"> <img src={success} /></div>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="warning" onClick={redirectHome}>
            Go home
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowConfirmation;
