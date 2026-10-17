import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import w1 from '../assets/img/well1.webp'
import w2 from '../assets/img/well2.webp'
import w3 from '../assets/img/well3.webp'
import w4 from '../assets/img/well4.webp'
import w5 from '../assets/img/well5.webp'
const Wellness = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 p-2">
                        <h2 className='pt-5 ps-4 pb-3 big-text'>Wellness</h2>
                        <Splide aria-label="My Favorite Images"
                            options={{
                                type: 'loop',
                                fixedWidth: '70%',
                                perMove: 1,
                                padding: {
                                    right: '5rem',
                                    left: '2rem',
                                },
                                gap: '70px',
                                pagination: false,
                                // focus: 0,
                            }}
                        >
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={w1} alt="Image 1" className='img-fluid' />
                                    </div>
                                    <p className='py-3 small-text'>The Oberoi Amarvilas, Agra. Inspired by Mughal palace designs with fountains, terraced lawns, reflection pools and pavilions, the resort offers unrestricted views of the Taj Mahal.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={w2} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='py-3 small-text'>The Oberoi Vindhyavilas Wildlife Resort, Bandhavgarh. An oasis of luxury in the heart of India, nestled in Madhya Pradesh and surrounded by the serene beauty of the wilderness.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={w3} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='py-3 small-text'>The Oberoi, Bengaluru. Nestled in lush, tropical grounds and equipped with the latest technology, this urban retreat reflects and harmonises the dual personality of Bengaluru, the Garden City and India's IT hub.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={w4} alt="Image 1" className='img-fluid' />
                                    </div>
                                    <p className='py-3 small-text'>The Oberoi, Gurgaon. A striking example of contemporary design and minutes from New Delhi international and domestic airport terminals, this urban sanctuary offers a sense of calm and seamless connectivity.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={w5} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='py-3 small-text'>The Oberoi, Gurgaon. A striking example of contemporary design and minutes from New Delhi international and domestic airport terminals, this urban sanctuary offers a sense of calm and seamless connectivity.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            
                        </Splide>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wellness