import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import h1 from '../assets/img/homes1.webp'
import h2 from '../assets/img/homes2.webp'
import h3 from '../assets/img/homes3.webp'
import h4 from '../assets/img/homes4.webp'
import h5 from '../assets/img/homes5.webp'
import h6 from '../assets/img/homes6.webp'
import h7 from '../assets/img/homes7.jpg'
import h8 from '../assets/img/homes8.webp'
import h9 from '../assets/img/homes9.webp'
import h10 from '../assets/img/homes10.webp'

const DestinationSl = () => {
    return (
        <>
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
                            <img src={h1} alt="Image 1" className='img-fluid' />
                        </div>
                        <p className='py-3 small-text'><b>The Oberoi Amarvilas, Agra.</b> Inspired by Mughal palace designs with fountains, terraced lawns, reflection pools and pavilions, the resort offers unrestricted views of the Taj Mahal.
                        </p>
                        <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='slider-outer explore-book'>
                        <div className="slider-zoom">
                            <img src={h2} alt="Image 2" className='img-fluid' />
                        </div>
                        <p className='py-3 small-text'><b>The Oberoi Vindhyavilas Wildlife Resort, Bandhavgarh.</b> An oasis of luxury in the heart of India, nestled in Madhya Pradesh and surrounded by the serene beauty of the wilderness.
                        </p>
                        <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='slider-outer explore-book'>
                        <div className="slider-zoom">
                            <img src={h3} alt="Image 2" className='img-fluid' />
                        </div>
                        <p className='py-3 small-text'>The Oberoi, Bengaluru. Nestled in lush, tropical grounds and equipped with the latest technology, this urban retreat reflects and harmonises the dual personality of Bengaluru, the Garden City and India's IT hub.
                        </p>
                        <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='slider-outer explore-book'>
                        <div className="slider-zoom">
                            <img src={h4} alt="Image 1" className='img-fluid' />
                        </div>
                        <p className='py-3 small-text'>The Oberoi, Gurgaon. A striking example of contemporary design and minutes from New Delhi international and domestic airport terminals, this urban sanctuary offers a sense of calm and seamless connectivity.
                        </p>
                        <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='slider-outer explore-book'>
                        <div className="slider-zoom">
                            <img src={h5} alt="Image 2" className='img-fluid' />
                        </div>
                        <p className='py-3 small-text'>The Oberoi, Gurgaon. A striking example of contemporary design and minutes from New Delhi international and domestic airport terminals, this urban sanctuary offers a sense of calm and seamless connectivity.
                        </p>
                        <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='slider-outer explore-book'>
                        <div className="slider-zoom">
                            <img src={h6} alt="Image 2" className='img-fluid' />
                        </div>
                        <p className='py-3 small-text'>Naila Fort, An Oberoi Luxury Residence, Jaipur. An intimate royal retreat rooted in Rajasthan's heritage. Set high in the Aravalli Ranges, the fort offers sweeping views across forested hills and the plains of Jaipur. A four- bedroom luxury residence, offered exclusively for private stays.
                        </p>
                        <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                    </div>
                </SplideSlide>
            </Splide>
        </>
    )
}

export default DestinationSl