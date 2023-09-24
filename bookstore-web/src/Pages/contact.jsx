import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

const contact = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid bg-dark">
                <div className="row p-3">
                    <div className="col-lg-7 text-white p-5">
                        <h1 className='display-4 fw-bold text-warning'>Contact US</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sed aspernatur pariatur iste excepturi quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas asperiores quaerat autem minima? Non, optio.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-center ">
                    <div className="col-lg-7 text-center mt-5 pt-5">
                        <h1 className='display-5 fw-bold'>Need Help? Say Hello</h1>
                        <p>An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at purus</p>
                    </div>
                </div>

                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-lg-3">
                        <div>
                            <h1 className='fw-bold'>Our Location</h1>
                            <p>121 King Street, Melbourne,
                                Victoria 3000 Australia</p>
                        </div>


                        <div className='my-5'>
                            <h1 className='fw-bold'>Let's Talk</h1>
                            <p>Phone : +12 3 3456 7890</p>
                            <p>Fax : +12 9 8765 4321</p>
                        </div>


                        <div>
                            <h1 className='fw-bold'>Working Hours</h1>
                            <p>Mon - Fri: 8:30am - 7:30pm <br />
                                Sat: 8:30am - 3:30pm</p>
                        </div>
                    </div>



                    <div className="col-lg-7 mx-lg-5">
                        <div>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Name</label>
                                    <input type="text" className="form-control p-3" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control p-3" id="exampleInputPassword1" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-3 fs-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <Footer/>
        </>
    )
}

export default contact
