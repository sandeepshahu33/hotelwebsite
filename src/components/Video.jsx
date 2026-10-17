import React from 'react'
import video from "../assets/img/hotel-video.mp4"
const Video = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-sm-12 p-0 position-relative border-0">
                        <div className='bg-video'>
                            <video autoPlay muted loop playsInline>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                        <div className='video-control mx-auto'>
                            <div className="container-fluid">
                                <div className="row pt-4">
                                    <div className="col-sm-3 d-flex align-items-center px-4 border-left">
                                        <div className='w-100 d-flex justify-content-between align-items-center '>
                                            <a className='booking' href="">India</a>
                                            <i className="fa-solid fa-angle-down text-black"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 d-flex align-items-center px-4  border-left">
                                        <div className='w-100 d-flex justify-content-between align-items-center'>
                                            <p className="mb-0">Check-In <i class="fa-regular fa-calendar-days"></i></p>
                                            <p className="mb-0">Check-Out <i class="fa-regular fa-calendar-days"></i></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 d-flex align-items-center px-3 border-left">
                                        <li className="nav-item dropdown list-unstyled">
                                            <a className="booking" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Check-In   1
                                                <i className="fa-solid fa-angle-down ms-5 text-black"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </div>
                                    <div className="col-sm-3 d-flex align-items-center px-4 ">
                                        <li className="nav-item dropdown list-unstyled">
                                            <a className='booking'  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Guests 2
                                                <i className="fa-solid fa-angle-down ms-4"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <div className='book2 d-flex align-items-center'>
                                            <a href="" >Book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Video