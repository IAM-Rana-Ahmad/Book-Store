import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import {Link} from 'react-router-dom'

const about = () => {
    return (
        <>
        <Navbar/>
            <div className="container-fluid bg-dark">
                <div className="row p-3">
                    <div className="col-lg-7 text-white p-5 col-12">
                        <h1 className='display-4 fw-bold text-warning'>About US</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sed aspernatur pariatur iste excepturi quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas asperiores quaerat autem minima? Non, optio.</p>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row d-flex align-items-center pt-5">
                    <div className="col-lg-6">
                        <img src="https://bookpresstheme.com/multiauthor/wp-content/uploads/sites/2/2022/05/about-bookpress-1.png" alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6 mt-3 col-12 ">
                        <h1 className='display-5 fw-bold mx-3'>About BookPress</h1>
                        <p className='my-3 mx-3'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque delectus nostrum sapiente cupind itate. Donec arcuit du ultricies non sodales nec, tortor egestas sed faucibus nut ipsum sit amet ornare arcu pulvinar.
                        </p>

                        <div className='mt-4'>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Donec arcu dui, ultricies non sodales nec, faucibus ut ipsum. Vestibulum ante ipsum primis in faucibus orci luctus</li>
                                <li className="list-group-item ">Mauris ultrices ornare eleifend. Ut sollicitudin nibh vel tortor tristique, sit amet ornare arcu pulvinar.</li>
                                <li className="list-group-item">Pellentesque eget dictum ligula. Morbi tristique sem tellus</li>
                            </ul>
                        </div>
                      
                      <Link to={"/"}>
                      <button className='btn btn-warning mt-5 mx-3 px-4 py-2'>Go Back</button>
                      </Link>
                        
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default about
