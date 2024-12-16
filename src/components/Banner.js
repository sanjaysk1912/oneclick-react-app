import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'

const Banner = () => {
    return (
        <div>

            <div className="Banner">
                <Container Fluid>
                    <Row>
                        <Col>
                        
                        <div className="Banner-Section">


                             <div className="Banner-Section-Content">
                                <div className="Banner-header-1">
                                    <h1>One Click Drag & Drop</h1>
                                </div>

                                <div className="Banner-header-2">
                                    <h3>Create Beautiful Website ||<span style={{fontStyle:"italic"}}> WordPress </span> + Elementor</h3>
                                </div>

                                <div className="Banner-btn">

                                    <a className="learn-btn" href="#learn">Learn More</a>
                                    <a className="Contact-btn" href="#learn">Contact Us</a> 

                                </div>

                            </div>
                            </div>
                        </Col>


                    </Row>


                </Container>
            </div>
        </div>
    )
}

export default Banner
