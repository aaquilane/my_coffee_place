import { Link } from "react-router-dom";
import { memo } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar({categories}){

    return (
        <Container  > 
            <Navbar bg="white" >
                <Nav >
                    {categories.map((category, i) => {
                        let ruta = "/category/" + category.category_name
                        return  <ul key={category.category_name} > <Link to={ruta}> {category.category_name}</Link></ul>;
                    })}
                </Nav>
            </Navbar>
        </Container > 
      );
}

export default memo(NavigationBar);