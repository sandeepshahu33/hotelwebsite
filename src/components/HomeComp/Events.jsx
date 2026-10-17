import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ev1 from '../../assets/img/event1.webp'
import ev2 from '../../assets/img/event2.webp'
import ev3 from '../../assets/img/event3.webp'
import ev4 from '../../assets/img/event4.webp'
import ev5 from '../../assets/img/event5.webp'

const Events = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className='ps-4 my-4 big-text'>Events</h2>
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
                                <div className=' explore-book'>

                                    <div className="slider-zoom">
                                        <img src={ev1} alt="Image 1" className='img-fluid' />
                                    </div>
                                    <p>
                                        Mewar by Vineet at The Oberoi Udaivilas, Udaipur. Drawing inspiration
                                        from the regional houses to the rural communities of the historic Mewar
                                        kingdom, Mentor Chef Vineet Bhatia (MBE) reimagines traditional flavours
                                        with his signature finesse.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className=' explore-book'>
                                    <div className="slider-zoom">
                                        <img src={ev2} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p>
                                        Madam Chow at The Oberoi, Gurgaon. Celebrates the rich culinary
                                        heritage of China, showcasing the finest traditions of Guangdong
                                        (Cantonese) and Sichuan - regions renowned for their distinctive flavours,
                                        premium ingredients and masterful techniques.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className=' explore-book'>
                                    <div className="slider-zoom">
                                        <img src={ev3} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p>
                                        Lord Vesper at The Oberoi, Gurgaon. A high energy bar that redefines
                                        evenings with craft cocktails, global cuisine and an immersive nightlife
                                        experience. Named after the enigmatic Lord Vesper - an embodiment of
                                        poise, elegance and the art of unwinding, it exudes refined indulgence.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className=' explore-book'>
                                    <div className="slider-zoom">
                                        <img src={ev4} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p>
                                        Dhilli at The Oberoi, New Delhi. Mentored by Michelin-starred Chef Vineet
                                        Bhatia MBE, Dhilli celebrates Delhi's culinary diversity. Inspired by Chandni
                                        Chowk, Rajouri Garden, Jama Masjid, C.R. Park, Nizamuddin, Paranthe Wali
                                        Gali and Purani Dilli, the menu reflects the city's rich traditions.
                                    </p>
                                    <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className=' explore-book'>
                                    <div className="slider-zoom">
                                        <img src={ev5} alt="Image 2" className='img-fluid' />
                                    </div>
                                    <p>
                                        Eau Bar at The Oberoi, Mumbai. With art-deco themed interiors, an
                                        outdoor deck, ocean views, exclusive cocktails and live music.
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

export default Events