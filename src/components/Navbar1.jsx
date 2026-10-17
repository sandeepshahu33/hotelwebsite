import React from 'react'

const Navbar1 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 p-0">
                        <nav className="navbar navbar-expand-lg nav1-bg p-0">
                            <div className="container-fluid ">
                                
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarNav">
                                    <ul className="navbar-nav ms-auto pe-5 gap-2">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Login/Join Now</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Partner Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contact us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " aria-disabled="true"><i className="fa-solid fa-magnifying-glass fs-5"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar1