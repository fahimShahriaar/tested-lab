import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import about1 from '../../img/about1.jpg'
import about2 from '../../img/about2.jpg'
import about3 from '../../img/about3.jpg'
import about from '../../img/about.jpg'

import './About.css';

const About = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner "
                        src={about1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 banner"
                        src={about2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner "
                        src={about3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
            <h1 className='mt-5 text text-center mb-5'>Who We Are</h1>
            <p className=' mt-5 m-3 mn-5' >Founded in 2008 by Dawit Hailu and his family, Wudassie Diagnostic Center (WDC) is one of the first diagnostic centers with MRI, CT scan Digital X-ray, Ultrasound, EKG and Ambulance service in the country. WDC’s passion for quality, cost-effectiveness and exceptional patient care were contagious and continue to be our core principles of operation.

                WDC is dedicated to providing the community in and outside Addis Ababa with the finest imaging services by a local team of specialized physicians and associates. This ensures that our patients receive care from a team who works closely with the local healthcare community, including the physicians who refer patients to WDC.

                In addition to this, WDC team is connected with other physicians and professionals across the country via WDC’s network, giving the Center the ability to share good practices and consult with other experts on special cases.</p>
            <h5 className='mt-5 text text-center mb-5'>MISSION</h5>
            <p className=' mt-5 m-3 mn-5 text-center' >WDC provides state-of-the-art diagnostic imaging to physicians, technologists, and clients in blending advanced technology, extensive clinical expertise, superior provider and patient care.The caring staff of WDC is committed to offering our patients and referring physicians the best service with advanced technology. All of our radiologists are certified by the Ministry of Health of Ethiopia as well as by the Radiation Authority of Ethiopia.  Additionally, all of our neuro-radiologists have received certificates of added qualifications in neuroradiology.</p>
            <h5 className='mt-5 text text-center mb-5'>VISION</h5>
            <p className=' mt-5 m-3 mn-5 text-center' >To be the leading state-of-the-art diagnostic imaging service provider with highest quality radiology reporting and ancillary services taking the best interest of patients and their referring physicians.The caring staff of WDC is committed to offering our patients and referring physicians the best service with advanced technology. All of our radiologists are certified by the Ministry of Health of Ethiopia as well as by the Radiation Authority of Ethiopia.  Additionally, all of our neuro-radiologists have received certificates of added qualifications in neuroradiology.</p>

            <div className='footer mt-3 pt-4'>
                <p>© 2000 - 2021 Tested Lab Diagnostic Labs. All Rights Reserved</p>
            </div>
        </div>

    );
};

export default About;