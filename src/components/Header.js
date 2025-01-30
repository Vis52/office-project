import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../utils/img/logo.png';
import Search from '../utils/img/search.png';
import user from '../utils/img/user.jpg';
import Button from 'react-bootstrap/esm/Button';
import './Navbar.css'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container> <Navbar.Brand href="#home">
        <img src={logo} alt="Cleanser Logo" /> Cleanser
      </Navbar.Brand> <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="my-auto">
            <NavDropdown className='my-auto' title="Product"
              id="product-dropdown">
              <NavDropdown.Item className='my-auto' href="#product/our-products">Our Products</NavDropdown.Item>
              <NavDropdown.Item className='my-auto' href="#product/best-selling">Best Selling Product</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#story">Story</Nav.Link>
            <Nav.Link href="#manufacturing">Manufacturing</Nav.Link>
            <NavDropdown title="Packazine" id="packazine-dropdown">
              <NavDropdown.Item href="#packazine/without-plastic">Without Plastic</NavDropdown.Item>
              <NavDropdown.Item href="#packazine/environment-supporting">Environment Supporting</NavDropdown.Item>
              
            </NavDropdown>
            <button  href='Sign-in'className="v1">Sign-in</button>
            <Nav.Link href='Search here'>

              <img src={Search} alt='Search here' /> 
            </Nav.Link>
            <Nav.Link href='user'>
              <img src={user} alt='user' /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>



      </Container>
    </Navbar>

  );
}
export default Header;


