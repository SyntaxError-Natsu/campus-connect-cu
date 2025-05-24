import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col lg={8} className="mx-auto">
                    <Card className="shadow-lg">
                        <Card.Body className="p-5">
                            <h1 className="text-center mb-4">Contact Us</h1>
                            <p className="lead text-center text-muted mb-5">
                                Get in touch with the Campus Connect CU team
                            </p>
                            
                            <Row>
                                <Col md={6}>
                                    <h4 className="text-warning mb-3">📧 Email Support</h4>
                                    <p>campusconnect@cuchd.in</p>
                                    
                                    <h4 className="text-warning mb-3">🏛️ Campus Location</h4>
                                    <p>
                                        Chandigarh University<br />
                                        NH-05, Ludhiana-Chandigarh<br />
                                        State Highway, Mohali, Punjab 140413
                                    </p>
                                </Col>
                                <Col md={6}>
                                    <h4 className="text-warning mb-3">💬 Student Support</h4>
                                    <p>For technical issues or suggestions, reach out to our student development team.</p>
                                    
                                    <h4 className="text-warning mb-3">🔗 Quick Links</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="https://www.cuchd.in" target="_blank" rel="noopener noreferrer">CU Official Website</a></li>
                                        <li><a href="https://uims.cuchd.in" target="_blank" rel="noopener noreferrer">UIMS Portal</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
