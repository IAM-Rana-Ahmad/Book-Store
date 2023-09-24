import React from 'react'
import "../navbar/navbar.css"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartData= useSelector((state)=>state.app.cartData)
    return (
        <div className='navbar-bg  sticky-top'>
            <div className="container ">
                <nav className="navbar navbar-expand-lg py-4 ">
                    <div className="container-fluid">

                        {/* LOGO IMG */}
                        <img src="https://bookpresstheme.com/wp-content/themes/bookpress/assets/images/logo.png" className='img-fluid' width={"150px"} alt="" />



                        {/* NAV LINKS */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold text-white fs-5 mx-lg-2" aria-current="page" to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold fs-5 text-white mx-lg-2" to={"/about"}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold fs-5 text-white mx-lg-2" to={"/contact"}>Contact</Link>
                                </li>
                               


                            </ul>



                            <div className='d-flex justify-content-center'>
                                <Link to={"/cart"}>
                                    <button type="button" className="btn fs-4  cart-btn   position-relative bi bi-cart-check">

                                        <span className="position-absolute rounded top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cartData.length}
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                </Link>


                                <button type="button" className="btn text-white  fs-4 mx-4 wish-btn   position-relative bi bi-bag-heart">

                                    <span className="position-absolute rounded top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        0
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
