import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="whit" variant="whit">
        <Container>
          <Navbar.Brand href="#home">ABC Estudio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Nosotros</Nav.Link>
              <Nav.Link href="#pricing">Servicios</Nav.Link>
               {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>  */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Presupuesto</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <CartWidget/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       
    )
}

export default NavBar 