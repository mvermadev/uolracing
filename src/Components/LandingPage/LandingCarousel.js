import React, {Fragment} from 'react';
import Carousel1 from '../Images/Machine1.png';
import Carousel2 from '../Images/Machine2.png';
import Carousel3 from '../Images/Machine3.png';
import Carousel4 from '../Images/Machine4.png';
import {Carousel, Container, Badge} from 'react-bootstrap'

const LandingCarousel = () => {
    return (
<Fragment>
<Container>
<Carousel>
  <Carousel.Item interval={500}>
    <img className="d-block w-100"
      src={Carousel1}
      alt="First slide"
    />
   <Carousel.Caption>
    <h1 style={{  color: "#000000"}}>
    Front <Badge bg=""style={{  color: "#FF5733", backgroundColor: "#000000" }} >View</Badge>
  </h1>
  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 h-50"
      src={Carousel2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h1 style={{  color: "#000000"}}>
    Rear <Badge bg=""style={{  color: "#FF5733", backgroundColor: "#000000" }} >View</Badge>
  </h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Carousel4}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h1 style={{  color: "#000000"}}>
    Side <Badge bg=""style={{  color: "#FF5733", backgroundColor: "#000000" }} >View</Badge>
  </h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Carousel3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h1 style={{  color: "#000000"}}>
    Top <Badge bg=""style={{  color: "#FF5733", backgroundColor: "#000000" }} >View</Badge>
  </h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
</Fragment>
    )
}

export default LandingCarousel;