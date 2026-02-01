import { Container, Nav, Navbar } from "react-bootstrap";
import '../styles/navbar.css';

function NavbarOffical() {
    return (
            <Navbar expand="lg" className="mb-5">
                <Container>
                    <Navbar.Brand href="/">Colby Writing Center: Tutor Match</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-evenly flex-grow-1">
                            <Nav.Link className="me-3" href="/">Dashboard</Nav.Link>
                            <Nav.Link className="me-3" href="/match">Tutor Match</Nav.Link>
                            <Nav.Link className="me-3" href="/requests">Professor Requests</Nav.Link>
                            <Nav.Link className="me-3" href="/catalog">Tutor Catalog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

    );
}

export default NavbarOffical;