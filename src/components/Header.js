import { Link } from 'react-router-dom';
import logo from "./images/thecoffeeplace_image.png";
import Stack from 'react-bootstrap/Stack';
import CartWidget from "./cart/CartWidget";
import OrderWidget from "./orders/OrderWidget";
import Container from 'react-bootstrap/Container';

function Header({categ}){
    return (
        <div >
          <Stack direction="horizontal" gap={3}>
            <div >
                <Container fluid > 
                  <Link to="/">
                    <img src={logo} width="60" height="60" /><b >My Coffee Place</b>
                  </Link>
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