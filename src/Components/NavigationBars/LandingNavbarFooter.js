import {Navbar, Container, Nav, Row, Col, Button, Figure} from 'react-bootstrap'
import './LandingNavbar.css'
import Footerlogo from '../Images/footerlogo.png'
import Facebook from '../Images/Facbook.png'
import Linkdeln from '../Images/Linkdeln.png'
import Youtube from '../Images/Youtube.png'
import Instagram from '../Images/Instagram.png'
import Map from '../Images/Map.png'
import { BsGlobe, BsFillTelephoneFill,BsMailbox2, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { IconContext } from "react-icons";

    
      const LandingNavbarFooter = () => {
        return (
          
            <Navbar variant="light" sticky="bottom" style = {{backgroundColor: "#474747"}}   >
               
            <Container>
            <Figure>
  <Figure.Image
    width={250}
    height={250}
    alt="300x400"
    src= {Footerlogo}
    style = {{paddingRight: "100px"}}
  />
  </Figure>
  <div className="justify-content-end">
  <Row>
  <h4 style={{color:"#FFFFFF"}}>Contact Details</h4>
      <br>
      </br>
      <br>   
      </br>
      <br>
        </br>
  <Col>
  <h2>
  <IconContext.Provider value={{ color: "#F9F4F3",  size:"20px" }}>
    <BsGlobe />
    </IconContext.Provider>
    </h2><p><a style={{color:"#F9F4F3", fontSize:"15px"}}href="https://www.le.ac.uk/">http://www.le.ac.uk/</a></p><br>
  </br>
  </Col>
  <Col>
  <h2>
  <IconContext.Provider value={{ color: "#F9F4F3",  size:"20px"}}>
    <BsFillTelephoneFill/>
    </IconContext.Provider>
    </h2><p><a style={{color:"#F9F4F3", fontSize:"15px"}}>0116 252 2522</a></p><br>
  </br>
  </Col>
  <Col>
  <h2>
  <IconContext.Provider value={{ color: "#F9F4F3", size:"20px" }}>
    <BsMailbox2/>
    </IconContext.Provider>
    </h2><p><a style={{color:"#F9F4F3", fontSize:"15px"}}>uolracingteam@gmail.com</a></p><br>
  </br>
   </Col>
   </Row>
   <hr />
   <p>Copyright © University of Leicester Racing 2022. All rights reserved.</p>
   </div>
  
  <div className="justify-content-end">
    <Row>
      <h4 style={{color:"#FFFFFF"}}>Social Media Links</h4>
      <br>
      </br>
      <br>   
      </br>
    <Col>
      <a href='https://facebook.com'>
      <IconContext.Provider value={{ color: "#F9F4F3", className: "global-class-name" }}>
        <BsFacebook />
      </IconContext.Provider>
      </a>
      </Col>
    
      <Col>
      <a href='https://instagram.com'>
      <IconContext.Provider value={{ color: "#F9F4F3", className: "global-class-name" }}>
        <BsInstagram />
      </IconContext.Provider>
      </a>
      </Col>
      
      <Col>
      <a href='https://linkdeln.com'>
      <IconContext.Provider value={{ color: "#F9F4F3", className: "global-class-name" }}>
        <BsLinkedin />
      </IconContext.Provider>
      </a>
      </Col>
    </Row>
  </div>
            </Container>
          </Navbar>
    
        );
      }

      export default LandingNavbarFooter;


    