import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    //sign out
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar sticky='top' className='header-nav' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className='fs-3 fw-bolder' as={Link} to="/">Books Stocker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home#books">Books</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <div className='d-md-flex'>
                                        <Nav.Link as={Link} to="/manageInventories">Manage Books</Nav.Link>
                                        <Nav.Link as={Link} to="/addInventoryItem">Add Book</Nav.Link>
                                        <Nav.Link as={Link} to="/myItems">My Books</Nav.Link>
                                        < button onClick={handleSignOut} className='btn btn-link text-decoration-none text-light'>Logout</button>
                                    </div>
                                    :
                                    <div className='d-md-flex'>
                                        < Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        <Nav.Link as={Link} to="/register">Registration</Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;