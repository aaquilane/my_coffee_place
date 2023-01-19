import ItemListView from "./ItemListView";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function ItemList({category}) {

    return (
            <Container fluid= {true}>
                {/* <Row sm={1} md={4} className="mb-6"> */}
                <Row xs={1} md={4} className="g-4">
                    {category.map((product, i) => {
                        return <Col key={i} className="mb-6"><ItemListView key={product.id} product={product} /> </Col>;
                    })}
                </Row>
            </Container>
    )
}

export default ItemList