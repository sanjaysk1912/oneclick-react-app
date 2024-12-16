import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import service1 from '../images/service1.png'
import service2 from '../images/service2.png'
import service3 from '../images/service3.png'
import service4 from '../images/service4.png'
import service5 from '../images/service5.png'
import service6 from '../images/service6.png'
import servicemain from '../images/servicemain.jpg'

const Services = () => {
    return (
        <div>

                 <h1 className="service-header" id="serv">Services</h1>
            <div className="services-section">
          
                <Container>
                    <Row>

                        <Col>

                        
                            <div className="services">

                                <div className="services-part">
                                   <img src={service1} alt="img1" />
                                   <h3>SEO Marketing</h3>
                                   <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>


                                <div className="services-part">
                                <img src={service2} alt="img1" />
                                   <h3>Web Development</h3>
                                   <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>


                                <div className="services-part">
                                <img src={service3} alt="img1" />
                                   <h3>UI/UX Degign</h3>
                                   <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </Col>

                        <Col>
                              <div className="service-main">

                                  <img src={servicemain} alt="service" />                              </div>
                        </Col>

                        <Col>
                        <div className="services">

<div className="services-part">
   <img src={service4} alt="img1" />
   <h3>Server Repairs</h3>
   <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>


<div className="services-part">
<img src={service5} alt="img1" />
   <h3>Computer Networks</h3>
   <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>


<div className="services-part">
<img src={service6} alt="img1" />
   <h3>Cloud Hosting</h3>
   <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>
                        </Col>



                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Services
