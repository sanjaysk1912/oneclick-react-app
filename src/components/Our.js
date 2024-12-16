import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import mike from '../images/mike.png'
import jen from '../images/jen.png'
import nic from '../images/nic.png'
import bill from '../images/bill.png'
const Our = () => {
    return (
        <div>
            <div className="ourteam-section">
                    <h1>Our Team</h1>
             <div className="ourteam-content">
             <Container>
                    <Row>
                      <Col md={5}>
                      <div className="team">
                        <div className="person1">
                        <img src={mike} alt="img" />
                        <h5>mike Moore</h5>
                        </div>
                        <div className="person1">
                        <img src={jen} alt="img" />
                        <h5>mike Moore</h5>
                        </div>
                        
                      </div>

                      <div className="team">
                      <div className="person1">
                        <img src={nic} alt="img" />
                        <h5>mike Moore</h5>
                        </div>
                        <div className="person1">
                        <img src={bill} alt="img" />
                        <h5>mike Moore</h5>
                      </div>
                      </div>
                      
                      </Col>


                      <Col md={7}>
                     <div className="ourteam-part2">
<h2>Our Team Delivers Top Quality Product and Amazing Customer Support</h2>
<p>We help our clients to develop clear strategies and roadmaps to get their products to market as quickly as possible, without skimping on the details.</p>
                     </div>
                      </Col>


                    </Row>



             </Container>






             </div>


            </div>
        </div>
    )
}

export default Our
