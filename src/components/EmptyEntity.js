import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function EmptyEntity({message}) {
    return (
        <Container> 
            <Card className="text-center" style={{width: '80rem' }}>
                <br></br>
                <br></br>
                <Card.Title> <h1> Ups!</h1>  </Card.Title>
                <Card.Subtitle> <h2> {message}</h2>  </Card.Subtitle>
                <br></br>
                <Link to="/">
                    <button className="btn btn-warning">Go Home</button>
                </Link>
                <br></br>
                <br></br>
            </Card>
        </Container> 
    )
}
export default EmptyEntity