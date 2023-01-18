import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar({categories}){

    return (
        <Container > 
            {/* {categories.map((category, i) => {
                let ruta = "/category/" + category.category_name
                return  <ul key={category.category_name}> <Link to={ruta}> {category.category_name}</Link></ul>;
            })} */}

            {/* <Navbar bg="white" className="row justify-content-center"> */}
            <Navbar bg="white">
                <Nav >
                    {categories.map((category, i) => {
                        let ruta = "/category/" + category.category_name
                        return  <ul key={category.category_name}> <Link to={ruta}> {category.category_name}</Link></ul>;
                    })}
                </Nav>
            </Navbar>
        </Container > 
      );
}

export default NavigationBar;