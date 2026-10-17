import React from 'react'
import logo from '../assets/img/logo1.png'

const Navbar2 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-body-tertiary">
                    <div className="col-sm-12 px-4 ">
                        <nav className="navbar ">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                
                                <div className="right-links d-flex gap-3 ps-3">
                                    <a href="#">Destinations</a>
                                    <a href="#">Dining</a>
                                    <a href="#">Wellness</a>
                                    <a href="#">Experiences</a>
                                </div>
                                <a href="#" className='mx-auto img-fluid'> <img src={logo} alt="" width="150px" /> </a>

                                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navbar</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                            <li className="nav-item">
                                                <a className="active " aria-current="page" href="#">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="" href="#">Link</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown
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
                                        </ul>
                                        <form className="d-flex mt-3" role="search">
                                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="right-links d-flex gap-4 justify-content-center align-items-center">
                                    <a href="#">Offers</a>
                                    <a href="#">Events</a>
                                    <a href="#">Awards</a>
                                    <button className='book1-btn'>Book</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar2