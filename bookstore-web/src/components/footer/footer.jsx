import React from 'react'
import "../footer/footer.css"

const footer = () => {
  return (
    <>
      <div className="container-fluid footer-bg mt-5 pt-5">
        <div className="container">
            <div className="row p-5 d-flex justify-content-center">
                <div className="col-lg-8 col-12 p-2">
                    <hr className='text-white ' />
                    <p className='text-warning text-center fs-5'>© 2017 - 2022 All Rights Reserved by Themeperch</p>

                    <p className=' text-center creator-text'>Created By Rana Ahmad</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default footer
