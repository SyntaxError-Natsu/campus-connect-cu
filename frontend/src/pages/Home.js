import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Campus Connect CU - Chandigarh University Student Platform';
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className="hero-section">
                <Container>
                    <Row className="align-items-center min-vh-75">
                        <Col lg={6}>
                            <h1 className="display-4 fw-bold mb-4">
                                Welcome to <span className="text-warning">Campus Connect</span>
                                <br />
                                <Badge bg="warning" text="dark" className="fs-6 mt-2">
                                    Chandigarh University Official Student Platform
                                </Badge>
                            </h1>
                            <p className="lead mb-4">
                                Your one-stop destination for academic collaboration, resource sharing, and building meaningful connections with fellow CU students.
                            </p>
                            
                            {/* Stats - Clickable */}
                            <div className="hero-stats mb-4">
                                <Row>
                                    <Col xs={6} md={3} className="text-center mb-3">
                                        <div className="stat-item" onClick={() => navigate('/about')}>
                                            <div className="stat-icon">👥</div>
                                            <div className="stat-number">40,000+</div>
                                            <div className="stat-label">CU Students</div>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={3} className="text-center mb-3">
                                        <div className="stat-item" onClick={() => navigate('/about')}>
                                            <div className="stat-icon">🏛️</div>
                                            <div className="stat-number">100+</div>
                                            <div className="stat-label">Departments</div>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={3} className="text-center mb-3">
                                        <div className="stat-item" onClick={() => navigate('/resources')}>
                                            <div className="stat-icon">📖</div>
                                            <div className="stat-number">500+</div>
                                            <div className="stat-label">Study Resources</div>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={3} className="text-center mb-3">
                                        <div className="stat-item" onClick={() => navigate('/contact')}>
                                            <div className="stat-icon">🕐</div>
                                            <div className="stat-number">24/7</div>
                                            <div className="stat-label">Community</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Hero Buttons */}
                            <div className="hero-buttons">
                                {!currentUser ? (
                                    <>
                                        <Button 
                                            variant="warning" 
                                            size="lg" 
                                            className="me-3 px-4"
                                            onClick={() => navigate('/register')}
                                        >
                                            🚀 Join CU Connect
                                        </Button>
                                        <Button 
                                            variant="outline-light" 
                                            size="lg" 
                                            className="px-4"
                                            onClick={() => navigate('/login')}
                                        >
                                            🔑 Student Login
                                        </Button>
                                    </>
                                ) : (
                                    <Button 
                                        variant="warning" 
                                        size="lg" 
                                        className="px-4"
                                        onClick={() => navigate('/dashboard')}
                                    >
                                        📊 Go to Dashboard
                                    </Button>
                                )}
                            </div>
                        </Col>
                        <Col lg={6} className="text-center">
                            <div className="cu-building-illustration" onClick={() => navigate('/about')}>
                                <div className="building-icon">🏛️</div>
                                <h3 className="text-warning">Chandigarh University</h3>
                                <p>Connecting 40,000+ Students</p>
                                <small className="text-muted">Click to learn more</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Features Section */}
            <Container className="my-5">
                <Row>
                    <Col lg={12} className="text-center mb-5">
                        <h2 className="display-5 fw-bold">Why Choose Campus Connect CU?</h2>
                        <p className="lead text-muted">Click on any feature to explore</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6} className="mb-4">
                        <Card className="feature-card h-100 border-primary" onClick={() => navigate('/resources')}>
                            <Card.Body className="text-center p-4">
                                <div className="feature-icon mb-3">📚</div>
                                <h5 className="text-primary mb-3">Academic Resources</h5>
                                <p className="text-muted">Access and share study materials, notes, and academic resources.</p>
                                <Button variant="primary" size="sm">Explore Resources</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className="mb-4">
                        <Card className="feature-card h-100 border-success" onClick={() => navigate('/posts')}>
                            <Card.Body className="text-center p-4">
                                <div className="feature-icon mb-3">💬</div>
                                <h5 className="text-success mb-3">Student Discussions</h5>
                                <p className="text-muted">Engage in discussions with peers and build connections.</p>
                                <Button variant="success" size="sm">Join Discussions</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className="mb-4">
                        <Card className="feature-card h-100 border-info" onClick={() => navigate(currentUser ? '/dashboard' : '/register')}>
                            <Card.Body className="text-center p-4">
                                <div className="feature-icon mb-3">🎯</div>
                                <h5 className="text-info mb-3">Department Content</h5>
                                <p className="text-muted">Find content specific to your department and year.</p>
                                <Button variant="info" size="sm">Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className="mb-4">
                        <Card className="feature-card h-100 border-warning" onClick={() => navigate('/posts')}>
                            <Card.Body className="text-center p-4">
                                <div className="feature-icon mb-3">🏆</div>
                                <h5 className="text-warning mb-3">Achievement Showcase</h5>
                                <p className="text-muted">Celebrate achievements and success stories.</p>
                                <Button variant="warning" size="sm">View Achievements</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className="mb-4">
                        <Card className="feature-card h-100 border-danger" onClick={() => navigate(currentUser ? '/dashboard' : '/register')}>
                            <Card.Body className="text-center p-4">
                                <div className="feature-icon mb-3">🤝</div>
                                <h5 className="text-danger mb-3">Collaboration Hub</h5>
                                <p className="text-muted">Find study partners and form project teams.</p>
                                <Button variant="danger" size="sm">Start Collaborating</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className="mb-4">
                        <Card className="feature-card h-100 border-secondary" onClick={() => navigate('/posts')}>
                            <Card.Body className="text-center p-4">
                                <div className="feature-icon mb-3">📅</div>
                                <h5 className="text-secondary mb-3">Campus Updates</h5>
                                <p className="text-muted">Stay updated with campus events and announcements.</p>
                                <Button variant="secondary" size="sm">View Updates</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Departments Section */}
            <div className="departments-section bg-light py-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center mb-5">
                            <h2 className="display-6 fw-bold">All CU Departments Welcome</h2>
                            <p className="lead">Click on your department to get started</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={6} className="mb-3">
                            <Card className="dept-card text-center" onClick={() => navigate(currentUser ? '/dashboard' : '/register')}>
                                <Card.Body>
                                    <h6>💻 Computer Science & Engineering</h6>
                                    <small className="text-muted">Click to join</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className="mb-3">
                            <Card className="dept-card text-center" onClick={() => navigate(currentUser ? '/dashboard' : '/register')}>
                                <Card.Body>
                                    <h6>⚡ Electronics & Communication</h6>
                                    <small className="text-muted">Click to join</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className="mb-3">
                            <Card className="dept-card text-center" onClick={() => navigate(currentUser ? '/dashboard' : '/register')}>
                                <Card.Body>
                                    <h6>🏗️ Civil Engineering</h6>
                                    <small className="text-muted">Click to join</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className="mb-3">
                            <Card className="dept-card text-center" onClick={() => navigate(currentUser ? '/dashboard' : '/register')}>
                                <Card.Body>
                                    <h6>⚙️ Mechanical Engineering</h6>
                                    <small className="text-muted">Click to join</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className="mb-3">
                            <Card className="dept-card text-center" onClick={() => navigate(currentUser ? '/dashboard' : '/register')}>
                                <Card.Body>
                                    <h6>💼 Business Administration</h6>
                                    <small className="text-muted">Click to join</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className="mb-3">
                            <Card className="dept-card text-center" onClick={() => navigate(currentUser ? '/dashboard' : '/register')}>
                                <Card.Body>
                                    <h6>🎨 Design & Arts</h6>
                                    <small className="text-muted">Click to join</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className="mb-3">
                            <Card className="dept-card text-center" onClick={() => navigate(currentUser ? '/dashboard' : '/register')}>
                                <Card.Body>
                                    <h6>⚕️ Medical Sciences</h6>
                                    <small className="text-muted">Click to join</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className="mb-3">
                            <Card className="dept-card text-center" onClick={() => navigate('/about')}>
                                <Card.Body>
                                    <h6>📊 And Many More...</h6>
                                    <small className="text-muted">Click to explore</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Call to Action */}
            <Container className="my-5">
                <Row>
                    <Col lg={12}>
                        <Card className="cta-card bg-gradient text-white text-center" onClick={() => navigate('/register')}>
                            <Card.Body className="p-5">
                                <h2 className="mb-4">Ready to Connect with Your CU Family?</h2>
                                <p className="lead mb-4">
                                    Join thousands of Chandigarh University students already using Campus Connect.
                                </p>
                                {!currentUser && (
                                    <Button 
                                        variant="warning" 
                                        size="lg" 
                                        className="px-5"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate('/register');
                                        }}
                                    >
                                        Get Started Today - It's Free! 🎉
                                    </Button>
                                )}
                                <div className="mt-3">
                                    <small>Click anywhere on this card to get started</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
