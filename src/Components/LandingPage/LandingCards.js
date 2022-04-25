import {Card, Container, Nav, Col, Button, Figure, Row, Badge} from 'react-bootstrap'
import {Fragment} from 'react';
import Image1 from '../Images/Card1.png';
import Image2 from '../Images/Card2.png';
import Image3 from '../Images/Card3.png';
import Image4 from '../Images/Card4.png';

const LandingCards = () => {
    return (
        <Fragment>
            <Container>
        <Row xs={7} md={2} className="g-4">
    <Col>
      <Card height={50} style={{color: "#000000"}} style={{display: 'flex', flexDirection: 'row',  backgroundColor:"#ff7961"}}>
        <Card.Img width={100}
    height={400}
    alt="300x400"
    src= {Image1} variant="top" />
        <Card.Body>
          <Card.Title>2016 Car Model Launch</Card.Title>
          <Card.Text>
          If I give the cards a fixed size with inline styling the cards line up horizontally but I cannot center them on the page. They line up a little to the left. I just want a three card row centered and evenly spaced.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{color: "#000000" ,}} style={{display: 'flex', flexDirection: 'row', backgroundColor:"#ff7961"}}>
      <Card.Img width={400}
    height={400}
    alt="300x400"
    src= {Image2} variant="top" />
        <Card.Body>
          <Card.Title>Engine Tuning</Card.Title>
          <Card.Text>
          If I give the cards a fixed size with inline styling the cards line up horizontally but I cannot center them on the page. They line up a little to the left. I just want a three card row centered and evenly spaced.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card style={{color: "#000000"}} style={{display: 'flex', flexDirection: 'row', backgroundColor:"#ff7961"}}>
      <Card.Img width={100}
    height={400}
    alt="300x400"
    src= {Image3} variant="top" />
        <Card.Body>
          <Card.Title>FSUK Car Queue</Card.Title>
          <Card.Text>
          If I give the cards a fixed size with inline stylingthe cards line up horizontally but I cannot center them on the page. They line up a little to the left. I just want a three card row centered and evenly spaced.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card style={{ color: "#000000"}} style={{display: 'flex', flexDirection: 'row', backgroundColor:"#ff7961"}}>
      <Card.Img width={100}
    height={400}
    alt="300x400"
    src= {Image4} variant="top" />
        <Card.Body>
          <Card.Title>Engine Works</Card.Title>
          <Card.Text>
          If I give the cards a fixed size with inline styling the cards line up horizontally but I cannot center them on the page. They line up a little to the left. I just want a three card row centered and evenly spaced.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
</Container>
        </Fragment>
    )
}

export default LandingCards;