import React from 'react'

const authors = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row mt-5 pt-5">
            <div className="col-lg-7 col-12 col-md-10">
              <h1 className='fw-bold text-warning'>
              Checkout our featured author
              </h1>
              <p className='text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing t, consectetur adipisicing elit. Ut quos cupiditate, nemo debitis, explicabo voluptas.
              </p>
            </div>
        </div>

        <div className="row mt-5 ">
            <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center">
             <div>
             <img src="https://bookpresstheme.com/multi/wp-content/uploads/sites/2/2022/03/testimonial-1.png" alt="" className='img-fluid' />
                <h3 className='mt-3 text-center'>Jonathan Barnas</h3>
                <p className='text-center'> Writer</p>
             </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center">
              <div className=''>
              <img src="https://bookpresstheme.com/multi/wp-content/uploads/sites/2/2022/03/testimonial2-1.png" alt="" className='img-fluid' />
                <h3 className='mt-3 text-center'>John Doe</h3>
                <p className='text-center'>Author and Writer</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center">
             <div>
             <img src="https://bookpresstheme.com/multi/wp-content/uploads/sites/2/2022/06/team-1-1-400x400.jpg" alt="" className='img-fluid' />
                <h3 className='mt-3 text-center'>Marcos Trison</h3>
                <p className='text-center'> Writer</p>
             </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 d-flex justify-content-center">
              <div>
              <img src="https://bookpresstheme.com/multi/wp-content/uploads/sites/2/2022/08/team-3-400x400.jpg" alt="" className='img-fluid' />
                <h3 className='mt-3 text-center'>Megan Koleman</h3>
                <p className='text-center'>Writer</p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default authors
