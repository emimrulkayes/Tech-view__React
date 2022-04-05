import React from 'react';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css'
import './Images/hero-img.png'



const Home = () => {
    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col className='text-start'>
                        <div className='hero-content'>
                            <h1 className='title'>Trusted Effective Service and Solutions</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. </p>
                        </div>
                    </Col>

                    <Col className='text-center'>
                        {/* <div className='hero-img'>
                            <img src="./Images/hero-img.png" className='img-fluid' alt="Hero-Img"/>
                        </div>

                        <Image.Img src='./Images/hero-img.png' className='img-fluid' alt='Hero-img' /> */}


                        <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;