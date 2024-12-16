import React from 'react'
import {Col,Row,Container} from 'react-bootstrap'
import about1 from '../images/about-1.jpg'
import about2 from '../images/about-2.jpg'
import about3 from '../images/about-3.jpg'
const About = () => {
    return (
        <div className="about">
            <Container>
                <Row>
                    <Col md={4}>
                    <div className="about-content">
                        <h1 className="about-h1" id="about-about">About</h1>
                       <h1>
                       <span>good </span> design <br/> <span>good </span> business
                      
                       </h1>

                       

                       <h3>
                       Remember good design <br/> always means good <br/> business...
                       </h3>

                       <p>
                       We help our clients to develop clear strategies and roadmaps to get their products to market as quickly as possible, without skimping on the details. Not just minimum viable.
                       </p>
                    </div>
                    </Col>

                    <Col md={8}>
                    <div className="about-img-section">
                           
                        <div className="about-1">
                      <img src={about1} alt="about1"/>
                        </div>    

                        <div className="about-2">

                        <img src={about2} alt="about1"/>
                        </div> 

                        <div className="about-3">
                        <img src={about3} alt="about1"/>

                        </div>   

                    </div>
                    
                    
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
