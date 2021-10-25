import React from 'react';
import { FaLocationArrow, FaPhone } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Container>
                <Row md={4} className='item'>


                    <Col xs={6} className='mt-5'>

                        <h3 className='mt-3 text'>Healthcare without the worry</h3>
                        <p className='mt-4'>Over 250,000 patients already
                            trust Praava and our services.
                            We operate at the highest
                            standards of care, all for a
                            price you can afford.

                        </p></Col>
                    <Col className='mt-5'>

                        <h3 className='mt-3 text'>Hours</h3>
                        <p className='mt-4'>Monday–Sunday
                            24 Hours
                        </p></Col>
                    <Col className='mt-5'>
                        <h3 className='text'>Contact Us</h3>

                        <h5 className='mt-3' ><FaLocationArrow /> Khulna,Bangladesh</h5>

                        <h5 className='mt-1' ><FaPhone /> +008328740</h5>

                    </Col>
                </Row>

            </Container>
            <div className='footer mt-3 pt-4'>
                <p>© 2000 - 2021 Tested Lab Diagnostic Labs. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;