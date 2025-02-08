import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from '../utils/img/logo1.png';
import Search from '../utils/img/search.png';
import user from '../utils/img/user.jpg';
import Button from 'react-bootstrap/esm/Button';
import './Navbar.css'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container> <Navbar.Brand href="home">
        <img src={logo1} alt="Cleanser Logo" /> Organic Beauty
      </Navbar.Brand> <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {/* <NavDropdown className='m-auto' title="Product"
              id="product-dropdown">
              <NavDropdown.Item className='m-auto' href="product/our-products">Our Products</NavDropdown.Item>
              <NavDropdown.Item className='m-auto' href="product/best-selling">Best Selling Product</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="Home">Home</Nav.Link>




            <Nav.Link href="Our_Products">Our Products</Nav.Link>

            <Nav.Link href="Best_selling_products">Best Selling Products</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
            <Nav.Link href='news'>News Letter</Nav.Link>
            {/* <NavDropdown title="Packaging" id="packazine-dropdown">
              <NavDropdown.Item href="packazine/without-plastic">Without Plastic</NavDropdown.Item>
              <NavDropdown.Item href="packazine/environment-supporting">Environment Supporting</NavDropdown.Item>
              
            </NavDropdown> */}
            <button href='Sign-in' className="v1">Sign-in</button>
            <Nav.Link href='Search here'>

              <img src={Search} alt='Search here' />
            </Nav.Link>
            {/* <Nav.Link href='user'>
              <img src={user} alt='user' /> </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>



      </Container>
    </Navbar>

  );
}
export default Header;


