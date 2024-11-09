import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './home.css';
import PaintRollerIcon from './True Finish SVG/PaintRollerIcon.svg';
import messageIcon from './True Finish SVG/messageIcon.svg';
import DrywallIcon from './True Finish SVG/DrywallIcon.svg';
import painterImg from './True Finish SVG/pI.jpg';




function Home() {
    return ( 
    <>

    <div class="container">
      <div class="wrapper">
        <div class="content">
        <h1>EXPERIENCED PAINTING AND DRYWALLING</h1>

          <h4>Ready to transform your space? Contact
us for a free consultation and let us bring
your vision to life!</h4>
<h3>GET A QUOTE <i class="fa-solid fa-play fa-2xs fa-fw"></i> </h3> 

        </div>
        <div class="image">
        <img src={painterImg} alt=""></img>
        </div>
      </div>

    </div>
    <div className="cardGroups">
    <CardGroup className="cardBackground">
      <Card className="cardColors">
        <Card.Img variant="top" src={PaintRollerIcon} className="cardIcons" height="150"/>
        <Card.Body>
          <Card.Title className="cardTitles">PAINTING</Card.Title>
          <Card.Text className="cardTexts">
          Transform your home with our
interior painting expertise,
complemented by our quality
exterior services. We deliver
stunning results that enhance
every space.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className="cardColors">
        <Card.Img variant="top" src={DrywallIcon} className="cardIcons" height="150"/>
        <Card.Body>
          <Card.Title className="cardTitles">DRYWALL</Card.Title>
          <Card.Text className="cardTexts">
          Professional drywall repair and
patching services that provide
quick and efficient solutions to
restore your walls.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className="cardColors">
        <Card.Img variant="top" src={messageIcon} className="cardIcons" height="150"/>
        <Card.Body>
          <Card.Title className="cardTitles">FREE CONSULTATIONS</Card.Title>
          <Card.Text className="cardTexts">
          Get your free consultation
today! Our experts are ready
to discuss your project and
provide tailored solutions.
Contact us now!
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    </div>







    </>
  );
}

export default Home;