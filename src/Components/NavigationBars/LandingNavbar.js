import {Navbar, Container, Nav, Col, Button, Figure} from 'react-bootstrap'
import './LandingNavbar.css'
import Image from '../Images/Logo.png'
      
      const LandingNavbar = () => {
        return (
            <Navbar bg="white" variant="light"  >
            <Container>
            <Figure>
  <Figure.Image
    width={500}
    height={800}
    alt="300x400"
    src= {Image}
    style = {{paddingRight: "100px"}}
  />
  </Figure>
            <Nav  className="me-auto">
              <Nav.Link style={{ paddingRight: "30px", fontSize: "18px" ,color: "#000000" }}  bg="dark"href="/aboutus">About us</Nav.Link>
              <Nav.Link style={{ paddingRight: "30px", fontSize: "18px" ,color: "#000000" }} href="#features">Atricle</Nav.Link>
              <Nav.Link style={{ paddingRight: "30px", fontSize: "18px" ,color: "#000000" }}   href="#pricing">Gallery</Nav.Link>
              <Nav.Link  style={{paddingRight: "30px", fontSize: "18px" ,color: "#000000" }}  href="#pricing">career</Nav.Link>
              </Nav>
              <div className="justify-content-end">
              <Button   variant = ""style={{backgroundColor:"#FF5733", color: "#000000" }}>Contact Us</Button>
              </div>
        
           
            </Container>
          </Navbar>
    
        );
      }

      export default LandingNavbar;


