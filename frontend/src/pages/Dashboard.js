import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return (
            <Container>
                <div className="text-center mt-5">
                    <h3>Please login to access your dashboard</h3>
                    <Link to="/login">Go to Login</Link>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Welcome back, {currentUser.full_name}!</h2>
                    <p className="text-muted">
                        {currentUser.course && `${currentUser.course} - Year ${currentUser.year_of_study}`}
                    </p>
                </Col>
            </Row>
            
            <Row className="mt-4">
                <Col md={6}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <h5>📝 Recent Posts</h5>
                            <p>Check out the latest posts from your fellow students.</p>
                            <Link to="/posts" className="btn btn-primary">
                                View Posts
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <h5>📚 Study Resources</h5>
                            <p>Access shared notes, books, and study materials.</p>
                            <Link to="/resources" className="btn btn-success">
                                Browse Resources
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
