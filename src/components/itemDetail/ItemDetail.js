import { useParams } from "react-router-dom"
import { useState, useRef, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import EmptyEntity from "../EmptyEntity";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
function ItemDetail ({menu}){
    const {productId} = useParams();
    const product = menu.find( (product) => product.id === productId) //Find selected product
    
    const [productQuantity, setProductQuantity] = useState(1);
    const quantityRef = useRef();

    const { addProduct } = useContext(CartContext);

    const handleQtyChange = () => {
        let qtyToAdd = parseInt(quantityRef.current.value);

        setProductQuantity(qtyToAdd);
        addProduct (product, qtyToAdd); 
    }


    if (product === undefined) {
        return <div><EmptyEntity message ={"Product not found!"} /></div>
    }
    else
        return (
            
            <Container >
            <Card>
                <Row>
                    <Col><Card.Img variant="top" src={product.image} /></Col>
                    <Col>
                        <br></br>
                        <h1> {product.name}</h1>
                        <h4>{product.description}</h4>
                        <br></br>
                        <h1>${product.price}</h1>
                        <h5>{product.discount}discount - Original price: {product.original_price}</h5>
                        
                        <br></br>
                        <br></br>

                        <input ref={quantityRef} type="number" id="typeNumber"  min="1" max="100" autoFocus />
                        <p>Your are adding {productQuantity} products to cart</p>
                        <br></br>
                       
                        <button className="btn btn-warning" onClick={handleQtyChange}>Add to cart</button>
                        <br></br>
                        <br></br>
                        <Link to="/">
                            <button className="btn btn-primary">Add more products</button>
                        </Link>
                    </Col>
                </Row>
            </Card>
            </Container>

        )
}

export default ItemDetail