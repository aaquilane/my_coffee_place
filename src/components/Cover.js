// import image from "../images/coffeelayout_color.jpeg";
import image from "./images/coffeelayout.webp";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';


function Cover() {
    const ratio = '16x9';

    return (
        <Container fluid>
            {/* <Row>
                <Col> */}
                <Ratio aspectRatio={ratio}>
                    <img src={image}  />
                </Ratio>
                {/* </Col>
            </Row> */}
        </Container>
    )
}

export default Cover