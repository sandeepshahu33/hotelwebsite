import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import of1 from '../../assets/img/offer1.webp'
import of2 from '../../assets/img/offer2.webp'
import of3 from '../../assets/img/offer3.webp'
const Offer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 p-2">
                        <h2 className='pt-5 ps-4 pb-3 big-text'>Offers</h2>
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
                                        <img src={of1} alt="Image 1" className='img-fluid' />
                                    </div>
                                    <p className='pt-3 small-text'>SUITE EXPERIENCES</p>
                                    <p className='small-text'>The Oberoi Amarvilas, Agra. Inspired by Mughal palace designs with fountains, terraced lawns, reflection pools and pavilions, the resort offers unrestricted views of the Taj Mahal.
                                    </p>
                                    <a href="#"> EXPLORE <i class="fa-solid fa-angle-right"></i> </a> <a href="#" className='ps-4'> BOOK <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={of2} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='pt-3 small-text'>SUITE EXPERIENCES</p>
                                    <p className='small-text'>Summer stays in cool, urban oases A summer of space, stillness and the city across our urban hotels in Bengaluru, Gurgaon, Mumbai and New Delhi.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a> 
                                    <a href="#" className='ps-4'> BOOK <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={of3} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='pt-3 small-text'>UNFORGETTABLE HOLIDAYS</p>
                                    <p className='small-text' >Unforgettable summers with Oberoi Stay in our luxury resorts across Agra, Bandhavgarh, Jaipur, Khajuraho, New Chandigarh, Ranthambhore and Udaipur.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                    <a href="#" className='ps-4'> BOOK <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer