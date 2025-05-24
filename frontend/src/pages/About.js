import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col lg={8} className="mx-auto">
                    <Card className="shadow-lg">
                        <Card.Body className="p-5">
                            <h1 className="text-center mb-4">About Campus Connect CU</h1>
                            <p className="lead text-center text-muted mb-5">
                                Connecting Chandigarh University students for a better academic experience
                            </p>
                            
                            <h3 className="text-warning mb-3">Our Mission</h3>
                            <p>
                                Campus Connect CU is designed specifically for Chandigarh University students to foster 
                                academic collaboration, resource sharing, and meaningful connections across all departments 
                                and years of study.
                            </p>
                            
                            <h3 className="text-warning mb-3">What We Offer</h3>
                            <ul>
                                <li>Academic resource sharing platform</li>
                                <li>Student discussion forums</li>
                                <li>Department-wise content organization</li>
                                <li>Project collaboration opportunities</li>
                                <li>Campus event updates and announcements</li>
                            </ul>
                            
                            <h3 className="text-warning mb-3">For CU Students, By CU Students</h3>
                            <p>
                                This platform is created by Chandigarh University students who understand the unique 
                                needs and challenges of our academic community. We're committed to making your 
                                university experience more connected and collaborative.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
