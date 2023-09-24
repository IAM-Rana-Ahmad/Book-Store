import React, { useState } from 'react'
import "../Hero/hero.css"
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../../features/bookSlice'

const Hero = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState('');
    
    const handleSearch = () => {
      
      dispatch(setSearchQuery(inputData))
    };

  
    return (
        <>
            <div className="container-fluid hero-bg">
                <div className="row d-flex justify-content-center py-5">
                    <div className="col-lg-7 col-md-11 col-12 my-4  text-center text-white p-lg-5 p-3 ">
                        <h1 className='display-4 fw-bold text-warning '>
                            Get Your New Book With Best Price Find Your Book Now
                        </h1>
                        <div className='line'></div>
                        <p className='fs-5  my-lg-5 '>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi delectus nostrum sapiente cupiditate.
                        </p>
                        <div>
                            <div class="input-group">
                                <input type="text" placeholder='Search By Book Title....' onChange={(e) => setInputData(e.target.value)}  class="fs-5 form-control p-3" aria-label="Text input with segmented dropdown button" />

                                <button type="button" onClick={handleSearch} class="btn search px-lg-5 fs-lg-5 fw-bold" >Search</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Hero
