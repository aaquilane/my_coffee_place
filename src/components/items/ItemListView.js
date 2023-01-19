import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function ItemListView({product}) {
    let rutaprod = `/product/${product.id}`

    return (
        <>
            <Card  style={{width: '20rem' } }>
                <Card.Img variant="top" src={product.image} />
                <Card.ImgOverlay>
                    <Card.Subtitle className="text-danger"> {product.discount} OFF </Card.Subtitle>
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{product.name} - ${product.price}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
            </Card> 
            
            <Link to={rutaprod}>
                <button className="btn btn-warning">Order now</button>
            </Link>
        </>
            
    )
}

export default ItemListView