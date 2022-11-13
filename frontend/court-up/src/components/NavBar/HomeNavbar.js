import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';

function HomeNavbar(props) {
    return (
        <Navbar className='HomeNavbar sticky-top' >
            <div className='NavLeft'>
            <Navbar.Brand className='NavBrand' href="https://gabepederson.com">
                <img src="courtup-logo.png" alt="CourtUp Logo" />CourtUp
            </Navbar.Brand>
                <Container className='NavLinks'>
                    <Nav.Link className='Link' href="#action1">Support</Nav.Link>
                    <Nav.Link className='Link' href="#action2">About</Nav.Link>
                 </Container>
            </div>
                <Button className='btnNav'>Sign In</Button>
        </Navbar>
    )
}

export default HomeNavbar;