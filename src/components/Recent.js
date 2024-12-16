import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import recent1 from '../images/recent1.jpg'
import recent2 from '../images/recent2.jpg'
import recent3 from '../images/recent3.jpg'
import recent4 from '../images/recent4.jpg'
import recent5 from '../images/recent5.jpg'
import recent6 from '../images/recent6.jpg'
const Recent = () => {
    return (
        <div>
            <h1 className="recent-header">Recent Work</h1>
            <div className="recent-section">
            <div className="rec"> 
               <Container>
                  
                   <Row>
                       <Col>
                       
                       <div className="recent-part">
                          <img src={recent1} alt="img1"/>
                          <h3>Mobile Wireframe</h3>
                       </div>
                       </Col>

                       <Col>
                       <div className="recent-part">
                       <img src={recent2} alt="img1"/>
                          <h3>Mobile Wireframe</h3>
                       </div>
                       </Col>

                       <Col>
                       <div className="recent-part">
                       <img src={recent3} alt="img1"/>
                          <h3>Mobile Wireframe</h3>
                       </div>
                       
                       </Col>
                       
                   </Row>

                   <Row>
                       <Col>
                       <div className="recent-part">
                       <img src={recent4} alt="img1"/>
                          <h3>Mobile Wireframe</h3>
                       </div>
                       </Col>

                       <Col>
                       <div className="recent-part">
                       <img src={recent5} alt="img1"/>
                          <h3>Mobile Wireframe</h3>
                       </div>
                       </Col>

                       <Col>
                       <div className="recent-part">
                       <img src={recent6} alt="img1"/>
                          <h3>Mobile Wireframe</h3>
                       </div>
                       
                       </Col>
                      
                   </Row>
                  
               </Container>
               </div>
            </div>
        </div>
    )
}

export default Recent
