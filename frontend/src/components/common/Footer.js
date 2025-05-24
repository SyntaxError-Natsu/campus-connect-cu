import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="cu-footer bg-dark text-light mt-5">
            <Container>
                <Row className="py-4">
                    <Col md={4}>
                        <h5 className="text-warning">Campus Connect CU</h5>
                        <p className="mb-2">
                            Connecting Chandigarh University students for better academic collaboration and resource sharing.
                        </p>
                        <p className="text-muted small">
                            Made with ❤️ by CU Students, for CU Students
                        </p>
                    </Col>
                    <Col md={2}>
                        <h6 className="text-warning">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="/about" className="text-light text-decoration-none">About</a></li>
                            <li><a href="/posts" className="text-light text-decoration-none">Posts</a></li>
                            <li><a href="/resources" className="text-light text-decoration-none">Resources</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h6 className="text-warning">CU Resources</h6>
                        <ul className="list-unstyled">
                            <li><a href="https://www.cuchd.in" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">CU Official Website</a></li>
                            <li><a href="https://uims.cuchd.in" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">UIMS Portal</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Library</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Student Portal</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h6 className="text-warning">Contact Info</h6>
                        <p className="mb-1">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            Chandigarh University<br />
                            NH-05, Ludhiana-Chandigarh<br />
                            State Highway, Mohali, Punjab
                        </p>
                        <p className="mb-1">
                            <i className="fas fa-envelope me-2"></i>
                            campusconnect@cuchd.in
                        </p>
                    </Col>
                </Row>
                <hr className="border-secondary" />
                <Row>
                    <Col md={6}>
                        <p className="mb-0 text-muted">
                            &copy; 2025 Campus Connect CU. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <p className="mb-0 text-muted">
                            <a href="#" className="text-warning text-decoration-none me-3">Privacy Policy</a>
                            <a href="#" className="text-warning text-decoration-none">Terms of Service</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
