import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import d1 from '../assets/img/dining1.webp'
import d2 from '../assets/img/dining2.webp'
import d3 from '../assets/img/dining3.webp'
import d4 from '../assets/img/dining4.webp'
import d5 from '../assets/img/dining5.webp'
import d6 from '../assets/img/dining6.webp'
import d7 from '../assets/img/dining7.webp'
import d8 from '../assets/img/dining8.webp'
import d9 from '../assets/img/dining9.webp'
import d10 from '../assets/img/dining10.webp'
const Dining = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className='ps-4 my-4 big-text'>Dining</h2>
                        <Splide aria-label="My Favorite Images"

                            options={{
                                type: 'loop',
                                fixedWidth: '50%',
                                perMove: 1,
                                perPage: 2,
                                padding: {
                                    right: '6rem',
                                    left: '2rem',
                                },
                                // padding:'5rem',
                                gap: '60px',
                                pagination: false,
                                focus: 0,
                            }}
                        >
                            <SplideSlide >
                                <div className='slider-outer explore-book'>

                                    <div className="slider-zoom">
                                        <img src={d1} alt="Image 1" className='img-fluid' />
                                    </div>
                                    <p className='small-text pt-3'>
                                        Mewar by Vineet at The Oberoi Udaivilas, Udaipur. Drawing inspiration
                                        from the regional houses to the rural communities of the historic Mewar
                                        kingdom, Mentor Chef Vineet Bhatia (MBE) reimagines traditional flavours
                                        with his signature finesse.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={d2} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='small-text pt-3'>
                                        Madam Chow at The Oberoi, Gurgaon. Celebrates the rich culinary
                                        heritage of China, showcasing the finest traditions of Guangdong
                                        (Cantonese) and Sichuan - regions renowned for their distinctive flavours,
                                        premium ingredients and masterful techniques.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={d3} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='small-text pt-3'>
                                        Lord Vesper at The Oberoi, Gurgaon. A high energy bar that redefines
                                        evenings with craft cocktails, global cuisine and an immersive nightlife
                                        experience. Named after the enigmatic Lord Vesper - an embodiment of
                                        poise, elegance and the art of unwinding, it exudes refined indulgence.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={d4} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='small-text pt-3'>
                                        Dhilli at The Oberoi, New Delhi. Mentored by Michelin-starred Chef Vineet
                                        Bhatia MBE, Dhilli celebrates Delhi's culinary diversity. Inspired by Chandni
                                        Chowk, Rajouri Garden, Jama Masjid, C.R. Park, Nizamuddin, Paranthe Wali
                                        Gali and Purani Dilli, the menu reflects the city's rich traditions.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={d5} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='small-text pt-3'>
                                        Eau Bar at The Oberoi, Mumbai. With art-deco themed interiors, an
                                        outdoor deck, ocean views, exclusive cocktails and live music.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={d6} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='small-text pt-3'>
                                        Wabi Sabi at The Oberoi, Bengaluru. Inspired by its namesake Japanese
                                        philosophy that honours the ephemeral beauty of nature. The soft murmur of
                                        a waterfall outside creates a zen-like soundscape while you enjoy the live
                                        sushi and sashimi.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={d7} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='small-text pt-3'>
                                        Rivayat at The Oberoi, Marrakech. An ode to India's culinary traditions,
                                        refined to unprecedented levels with innovations by Michelin-starred Chef
                                        Rohit Ghai.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={d8} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='small-text pt-3'>
                                        Mewar by Vineet at The Oberoi Udaivilas, Udaipur. Drawing inspiration
                                        from the regional houses to the rural communities of the historic Mewar
                                        kingdom, Mentor Chef Vineet Bhatia (MBE) reimagines traditional flavours
                                        with his signature finesse.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={d9} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='small-text pt-3'>
                                        Madam Chow at The Oberoi, Gurgaon. Celebrates the rich culinary
                                        heritage of China, showcasing the finest traditions of Guangdong
                                        (Cantonese) and Sichuan - regions renowned for their distinctive flavours,
                                        premium ingredients and masterful techniques.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='slider-outer explore-book'>
                                    <div className="slider-zoom">
                                        <img src={d10} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p className='small-text pt-3'>
                                        Lord Vesper at The Oberoi, Gurgaon. A high energy bar that redefines
                                        evenings with craft cocktails, global cuisine and an immersive nightlife
                                        experience. Named after the enigmatic Lord Vesper - an embodiment of
                                        poise, elegance and the art of unwinding, it exudes refined indulgence.
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

export default Dining