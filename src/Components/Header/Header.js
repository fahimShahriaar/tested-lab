import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaArrowAltCircleRight } from 'react-icons/fa';
import './Header.css'
import useAuth from '../../hook/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>
            <>
                <Navbar className="navClass" sticky="top" variant="dark" collapseOnSelect expand="lg">

                    <Navbar.Brand href="/home">
                        <h4 className="ms-5">Tested Lab</h4>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className='nav-link'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/services" className='nav-link'>Services</Nav.Link>
                        <Nav.Link as={Link} to="/about" className='nav-link'>About Us</Nav.Link>
                        <Nav.Link as={Link} to="/physician" className='nav-link'> Our Team</Nav.Link>

                        {!user.email && <Nav.Link as={Link} to="/signup" className='nav-link custom-border me-4'> Sign up</Nav.Link>}


                        <Navbar.Text>

                            {user?.email && <span className='ms-5 '>  <FaArrowAltCircleRight /> {user.displayName}</span>}
                        </Navbar.Text>

                    </Navbar.Collapse>
                    {user?.email && <Nav.Link as={Link} to="" className='nav-link ms-3 custom-border me-4' onClick={logOut}> Logout</Nav.Link>}


                </Navbar>

            </>
        </div>
    );
};

export default Header;