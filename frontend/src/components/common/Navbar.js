import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../../context/AuthContext';

const NavigationBar = () => {
    const { currentUser, logout } = useAuth();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="cu-navbar shadow-sm">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className="cu-brand">
                        <img 
                            src="/cu-logo.png" 
                            alt="CU" 
                            width="40" 
                            height="40" 
                            className="me-2"
                            onError={(e) => {e.target.style.display = 'none'}}
                        />
                        <span className="brand-text">
                            Campus Connect <small className="text-warning">CU</small>
                        </span>
                    </Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>🏠 Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>ℹ️ About</Nav.Link>
                        </LinkContainer>
                        {currentUser && (
                            <>
                                <LinkContainer to="/dashboard">
                                    <Nav.Link>📊 Dashboard</Nav.Link>
                                </LinkContainer>
                                <NavDropdown title="🎓 Academic" id="academic-dropdown">
                                    <LinkContainer to="/posts">
                                        <NavDropdown.Item>📝 Discussion Posts</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/resources">
                                        <NavDropdown.Item>📚 Study Resources</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#" disabled>🔜 More Coming Soon</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        )}
                        <LinkContainer to="/contact">
                            <Nav.Link>📞 Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    
                    <Nav>
                        {currentUser ? (
                            <>
                                <Navbar.Text className="me-3 user-welcome">
                                    Welcome, <strong>{currentUser.full_name}</strong>! 
                                    <br />
                                    <small className="text-warning">{currentUser.course}</small>
                                </Navbar.Text>
                                <Button variant="outline-warning" onClick={logout} size="sm">
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <LinkContainer to="/login">
                                    <Button variant="outline-light" className="me-2" size="sm">
                                        Login
                                    </Button>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Button variant="warning" size="sm">
                                        Join CU Connect
                                    </Button>
                                </LinkContainer>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
