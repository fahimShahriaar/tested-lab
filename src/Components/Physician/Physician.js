import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../img/about1.jpg';
import phy from '../../img/phy.jpg';
import './Physician.css'

const Physician = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner "
                        src={phy}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h2 className='banner-text'>Working For You</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 banner"
                        src={banner1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                        <h2 className='banner-text'>LABORATORY SERVICES</h2>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>


            <h1 className='mt-5 text text-center'>TEAM</h1>
            <p className='mt-3 custom m-5'>We are on a mission to bring better care to Bangladesh! We believe that everyone should have access to high quality, affordable and compassionate care. This belief is what unifies us all at tested Lab </p>
            <h1 className='mt-5 text text-center'>Our Practice</h1>
            <p className='mt-3 custom m-5'>We are responsive to our patients’ needs and proactive in our relationships with referring physicians.

                We give service 24/7 ,365/6 days a year and on the 13th month we give free service for those eligible for it.

                We do everything possible to create a true partnership as we strive for diagnostic certainty.

                Supports several charities and healthcare promotions. We strive to be the best in every aspect of our practice and in our dedication to serve our community.</p>

        </div>
    );
};

export default Physician;