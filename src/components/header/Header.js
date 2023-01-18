import Stack from 'react-bootstrap/Stack';
import CartWidget from "../cartWidget/CartWidget";
import OrderWidget from "../orderWidget/OrderWidget";
import logo from "../images/thecoffeeplace_image.png";
import Container from 'react-bootstrap/Container';

function Header({categ}){
    return (
        <div>
          <Stack direction="horizontal" gap={3}>
            <div >
                <Container fluid> 
                <img src={logo} width="60" height="60" /> My Coffee Place
                </Container>
            </div>
            <div className="bg-white  ms-auto">
                <CartWidget />
            </div>
            <div className="vr" />
            <div className="bg-white ">
                <OrderWidget />
            </div>
            <div className="vr" />
          </Stack>
        </div>
      );
}

export default Header;