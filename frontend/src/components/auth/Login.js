import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authAPI } from '../../services/api';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await authAPI.login(formData);
            login(response.data.token, response.data.user);
            navigate('/dashboard');
        } catch (error) {
            setError(error.response?.data?.error || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow">
                        <Card.Body>
                            <h2 className="text-center mb-4">Login to Campus Connect</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Button 
                                    variant="primary" 
                                    type="submit" 
                                    className="w-100"
                                    disabled={loading}
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </Button>
                            </Form>
                            <div className="text-center mt-3">
                                Don't have an account? <Link to="/register">Register here</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
