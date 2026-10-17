import React from 'react'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Video from './components/Video'
import h1 from './assets/img/home1.webp'
import h2 from './assets/img/home2.webp'
import h3 from './assets/img/home3.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import DestinationSl from './components/DestinationSl'
import Dining from './components/Dining'
import Wellness from './components/Wellness'
import Experience from './components/HomeComp/Experience'
import Offer from './components/HomeComp/Offer'
import Events from './components/HomeComp/Events'
import Footer from './components/Footer'
import ob1 from './assets/img/ob-one.webp'
import ob2 from './assets/img/ob-select.webp'
import ob3 from './assets/img/ob-award.webp'
import ob4 from './assets/img/ob-alliance.webp'
import mag1 from './assets/img/mag1.webp'
import mag2 from './assets/img/mag2.webp'
import mag3 from './assets/img/mag3.webp'

const Home = () => {
    return (
        <>
            <Navbar1 />
            <Navbar2 />
            <Video />
            <div className="container-fluid">
                <div className="row px-4">
                    <div className="col-sm-6">
                        <Splide
                            options={{
                                type: 'loop',
                                perPage: 1,
                                autoplay: true,
                                interval: 2000,
                                arrows: true,
                                pagination: true,
                            }}
                        >
                            <SplideSlide>
                                <img src={h1} alt="Home 1" className="" height="600px" width="100%" />
                            </SplideSlide>

                            <SplideSlide>
                                <img src={h2} alt="Home 1" className="" height="600px" width="100%" />
                            </SplideSlide>

                            <SplideSlide>
                                <img src={h3} alt="Home 1" className="" height="600px" width="100%" />
                            </SplideSlide>

                        </Splide>

                    </div>

                    <div className="col-sm-6 p-5 d-flex align-items-center">
                        <div>
                            <h2 className='big-text'>Welcome to <br />Oberoi Hotels & Resorts</h2>
                            <p className='small-text'>Experience our personalised service in six countries all around India, Egypt, Indonesia, Mauritius and Morocco. At each destination, we offer a taste of local cuisines, inspired architecture and accommodation with magnificent views of the surrounding landscapes. All complemented by the sincere, intuitive attention to your every need that is unmistakably Oberoi. Heart. Felt.
                            </p>
                            <p className='small-text'>Oberoi Hotels & Resorts has been ranked the Best Hotel Group in the World by the Telegraph Travel Awards UK, 2025.</p>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-12 p-4 mt-4">
                        <div className='bg-img m-2 position-relative'>

                            <div className='position-absolute bottom-0 text-white limited-offer'>
                                <h2>LIMITED TIME OFFER</h2>
                                <p>Enjoy 15% savings for reservations made before 25th August for stays until 30th September, 2026.
                                    As an Oberoi One member, enjoy an additional INR 5,000
                                    hotel credit per stay when you book on oberoihotels.com
                                    for stays until 31st August, 2026.
                                </p>
                                <a href="#" >Know More <i className="fa-solid fa-chevron-right"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 px-4">
                        <h2 className='big-text'>Destinations</h2>
                        <div className='d-flex gap-5 py-2 mb-4 destination-link'>
                            <a href="#">India</a>
                            <a href="#">Egypt</a>
                            <a href="#">Indonesia</a>
                            <a href="#">Mauritius</a>
                            <a href="#">Morocco</a>
                            <a href="#">Saudi Arabia</a>
                        </div>
                    </div>

                </div>

            </div>
            <DestinationSl />
            <Dining />
            <Wellness />
            <Experience />
            <Offer></Offer>
            <Events />
            <div className="container-fluid">
                <div className="row pt-4">
                    <div className="col-sm-12 pt-4">
                        <h2 className='ps-4 big-text'>Oberoi One</h2>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-sm-6">
                        <div className='slider-zoom'>
                            <img src={ob1} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-sm-6 p-4  d-flex flex-column justify-content-center">
                        <h3 className='big-text'>Our Distinctive Guest Recognition Programme</h3>
                        <p>Oberoi One is our distinctive guest recognition programme that guarantees a host of personalised benefits and privileges from your very first stay.
                        </p>
                        <p>From member-only rates on our website and savings when you dine with us, to flexible check-in and check-out timings and complimentary stays and upgrades. The more often you stay with us, the better the programme gets for you.</p>
                        <p>Our goal is to make each visit to an Oberoi hotel feel personal and meaningful and Oberoi One is our way of getting to serve you better.</p>
                        <div className='explore-book'>
                            <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                            <a href="#" className='ps-4'> BOOK <i class="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-sm-12">
                        <h2 className='ps-4 big-text'>Oberoi Select</h2>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-sm-6">
                        <div className='slider-zoom'>
                            <img src={ob2} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-sm-6 p-4 explore-book d-flex flex-column justify-content-center">
                        <h3 className='big-text'>Enhanced Benefits and Exclusive Offers</h3>
                        <p>Discover the enhanced Oberoi Select, our exclusive programme that allows you to pre-purchase hotel credit redeemable at Oberoi Hotels & Resorts in India. Whether travelling for business or a family holiday, Oberoi Select offers a seamless experience. All complemented by our warm, heartfelt hospitality.
                        </p>

                        <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-sm-12">
                        <h2 className='ps-4 big-text'>Awards</h2>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-sm-6">
                        <div className='slider-zoom'>
                            <img src={ob3} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-sm-6 p-4 explore-book d-flex flex-column justify-content-center">
                        <h3 className='big-text'>Enhanced Benefits and Exclusive Offers</h3>
                        <p>
                            <b>Featured Among the Top 10 Best Hotel Brands in the World 2026</b>
                        </p>
                        <p>Travel + Leisure, World’s Best Awards</p>
                        <p>
                            <b>Editor’s Choice for Best Hotel Brand for Service Excellence 2025</b>
                        </p>
                        <p>Travel + Leisure, India’s Best Awards</p>
                        <p>
                            <b>Best Hotel Group in the World 2025</b>
                        </p>
                        <p>Telegraph Travel Awards, UK</p>

                        <a href="#">View All <i class="fa-solid fa-angle-right"></i> </a>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-sm-12">
                        <h2 className='ps-4 big-text'>Mandarin Oriental Alliance</h2>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-sm-6">
                        <div className='slider-zoom'>
                            <img src={ob4} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-sm-6 p-4 explore-book d-flex flex-column justify-content-center">

                        <p>Mandarin Oriental Hotel Group is the award-winning owner and operator of some of the world’s most luxurious hotels, resorts and residences.
                        </p>
                        <p>
                            Having grown from its Asian roots into a global brand, the group now operates 44 hotels, 12 residences and 26 exclusive homes in 27 countries and territories, with each property reflecting the group’s oriental heritage, local culture and unique design.
                        </p>
                        <p>
                            Mandarin Oriental has a strong pipeline of hotels and residences under development and is a member of the Jardine Matheson Group.
                        </p>

                        <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-sm-12">
                        <h2 className='ps-4 big-text'>The Oberoi Group Magazine</h2>
                    </div>
                </div>
                <div className="row p-4 mb-5">
                    <div className="col-sm-4">
                        <div className='explore-book'>
                            <div className="slider-zoom">
                                <img src={mag1} alt="Image 2" className='img-fluid' />
                            </div>
                            <p>WANDERLUST</p>
                            <p>The Great Adven...</p>
                            <p>By Juliet Highet</p>
                            <p>
                               Peru is one of the peak experiences in travel. Nowhere on earth is there such an incredibly <br /> wide ran...
                            </p>
                            <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className='explore-book'>
                            <div className="slider-zoom">
                                <img src={mag2} alt="Image 2" className='img-fluid' />
                            </div>
                            <p>WANDERLUST</p>
                            <p>The Great Adven...</p>
                            <p>By Juliet Highet</p>
                            <p>
                               Peru is one of the peak experiences in travel. Nowhere on earth is there such an incredibly <br /> wide ran...
                            </p>
                            <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className='explore-book'>
                            <div className="slider-zoom">
                                <img src={mag3} alt="Image 2" className='img-fluid' />
                            </div>
                            <p>LITERATURE</p>
                            <p>Life & Leagacy of T...</p>
                            <p>By John Mulligan</p>
                            <p>
                               William Shakespeare lived through one of the most turbulent yet thrilling era’s of English <br /> history...
                            </p>
                            <a href="#">EXPLORE <i class="fa-solid fa-angle-right"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Home