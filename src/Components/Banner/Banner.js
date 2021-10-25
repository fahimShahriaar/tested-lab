import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jpg'
import banner3 from '../../img/banner3.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 slide-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h1 className='banner-text fw-bold'>Tested
                            Diagnostic Center</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 slide-img"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>


                        <h1 className='banner-text fw-bold'>LARGEST INDEPENDENT
                            IN-NETWORK DIAGNOSTIC LABORATORY</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className='banner-text fw-bold'><h1 className='banner-text fw-bold'>LARGEST INDEPENDENT
                            IN-NETWORK DIAGNOSTIC LABORATORY</h1></h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;