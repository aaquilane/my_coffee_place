import Card from 'react-bootstrap/Card';
import sorryImage from "../images/sorry.webp";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
function EmptyEntity({message}) {
    return (
        <Container> 
            <Card className="text-center" style={{width: '80rem' }}>
                {/* <Card.Img variant="top" src={sorryImage} /> */}
                {/* <Card.ImgOverlay> */}
                <br></br>
                    <Card.Title> <h1> Ups!</h1>  </Card.Title>
                    <Card.Subtitle> <h2> {message}</h2>  </Card.Subtitle>
                    <br></br>
                    <Link to="/">
                        <button className="btn btn-warning">Go Home</button>
                    </Link>
                    <br></br>
                    <br></br>
                {/* </Card.ImgOverlay> */}
            </Card>
        </Container> 
    )
}
export default EmptyEntity