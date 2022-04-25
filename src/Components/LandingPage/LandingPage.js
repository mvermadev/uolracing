import React, {Fragment, useEffect} from 'react';
import LandingNavbar from '../NavigationBars/LandingNavbar'
import Image1 from '../Images/sponsor.png';
import Landing from '../Images/Landing1.png';
import Logo from '../Images/Apply.png';
import WebFont from 'webfontloader';
import Event from '../Images/Event.png'
import {Card, Container, Nav, Col, Button, Figure, Row, Form, Image} from 'react-bootstrap';
import LandingCarousel from './LandingCarousel';
import LandingCards from './LandingCards';
import LandingNavbarFooter from '../NavigationBars/LandingNavbarFooter'
import { BsGlobe, BsFillTelephoneFill,BsMailbox2  } from 'react-icons/bs';

const LandingPage = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
   }, []);
    return (
        <Fragment style={{backgorundColor:"#000000"}}>
        <div>
        <LandingNavbar />
        </div>
        <Container>
        <br>
        </br>
        <Row>
          <Col>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <h1 style={{  color: "#000000"}}>
    Innovation comes from Experiments
  </h1>
        <p style={{ color: "#FF5733" }}>Welcome to our Website<br></br><strong>#UOLRacing</strong></p>
        <br>
        </br>
        <Button   size="lg"  variant="" style={{backgroundColor:"#FF5733", color: "#000000" }}>Events</Button>
        </Col>
        <Col>
        <div >
        <img width={700} height={500} src={Landing}/>
        </div>
        </Col>
        </Row>
        </Container>
        <div  >
        <br>
        </br>
        <h1 style={{ color: "#FF5733" }}><strong>Our Works</strong></h1>
        <Figure.Caption style={{ color: "#000000" }} >
            Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
        <br>  
        </br>
        <LandingCards />  
        <Container>
        <br>
        </br>
        <Row>
          <Col>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        <h1 style={{ color: "#000000" }}><strong>Our Sponsors</strong></h1>
        <p style={{ color: "#FF5733" }}>List of Our Sponsors</p>
        </Col>
        <Col>
          <br>
          </br>
          <br>
          </br>
        <div className="justify-content-end">
        <img width={500} height={400} src={Image1}/>
        </div>
        </Col>
        </Row>
        <br>
        </br>
        <Container>
        <Row>
        <Col>
        <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        <div className="justify-content-end">
        <Image width={700} height={450} src={Event} fluid/>
        </div>
        </Col>
        <Col>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        <h1 style={{ color: "#000000" }}><strong>Join our Team?</strong></h1>
        <p style={{ color: "#FF5733" }}>Click Below to view our openings</p>
        <br></br>
        <Button   size="lg" variant="" style={{backgroundColor:"#FF5733", color: "#000000" }}>Apply</Button>
        </Col>
        </Row>
        </Container>
        <br>
        </br>
        <Container>
        <br></br>
        <br>
        </br>
        <h1 style={{ color: "#000000" }}><strong>Gallery</strong></h1>
        <br>
        </br>
          <LandingCarousel />
          <Row >
          <Col>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        <h1 style={{ color: "#000000" }}><strong>Any Questions?</strong></h1>
        <p style={{ color: "#FF5733" }}>Send us a message now</p>
        </Col>
        <Col>
        <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        <Card style={{width:"37rem"}} className="text-center">
  <Card.Header style={{backgroundColor: "#ffffff", color:"#000000"}}> <h2><BsMailbox2/></h2><h4>Send us a Message</h4></Card.Header>
  <Card.Body style={{backgroundColor: "#ffffff", color:"#000000"}}>
  <Form>
  <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control style={{backgroundColor: "#ADB2B9", color:"#000000"}} type="namw" placeholder="" />
  </Form.Group>
  <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
    <Form.Label>Email</Form.Label>
    <Form.Control style={{backgroundColor: "#ADB2B9", color:"#000000"}} type="email" placeholder="" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control style={{backgroundColor: "#ADB2B9", color:"#000000"}} as="textarea" rows={3} />
  </Form.Group>
</Form>
    <Button variant="" style={{backgroundColor: "#ADB2B9", color:"#000000"}}>Send</Button>
  </Card.Body>
</Card>
        </Col>
        </Row>
        <br>
        </br>
        </Container>
        </Container>
        </div>
        <div>
        <LandingNavbarFooter />
        </div>
</Fragment>
    )
}

export default LandingPage;