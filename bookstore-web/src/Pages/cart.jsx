import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/navbar/navbar'
import { Link } from 'react-router-dom'
import { removeCart } from '../features/bookSlice'



const Cart = () => {
     
    const dispatch= useDispatch()
    const cartItem = useSelector((state) => state.app.cartData)
    const cartRemove=(id)=>{
        dispatch(removeCart(id))
    }
    return (
        <>

            <Navbar />
            <div className="container-fluid mt-5">
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-7  p-3">
                        <p className="display-5 fs-4">Cart Products</p>
                        {cartItem.map((product) => (
                            <div key={product.id} className="card mb-3 border p-4 shadow-md">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img
                                            src={product.volumeInfo.imageLinks.thumbnail}
                                            className="img-fluid rounded-start"
                                            alt={"/"}
                                            style={{ width: '50%', height: '20vh', alignSelf: 'center' }}
                                        />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.volumeInfo.title}</h5>
                                            <p className='fs-5'>Price:{product.price + "$"}</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                        <div className='d-flex  justify-content-end'>
                                            <button className='btn btn-dark' onClick={()=>cartRemove(product.id)}>Remove Cart</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))}
                        <hr />
                    </div>


                    <div className="col-md-3 border mx-3 p-5 fixed-height-container shadow-lg" style={{ borderRadius: "2rem", height:"50vh"}}>
                        <div>
                            <p className="fs-5">Total Items</p>
                            <span className='fw-bold align-text-end'>{cartItem.length}</span>
                            <hr />
                        </div>
                        <div className="d-flex">
                            <p>Sub-Total</p>
                            <div className="ms-auto">
                                <p>$897</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <p>Sub-Total</p>
                            <div className="ms-auto">
                                <p>$897</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <p className="text-dark fs-5">Total</p>
                            <div className="ms-auto">
                                <p className="text-dark fs-5 fw-bold">

                                </p>
                            </div>

                        </div>
                        <div className="">
                            <Link to={'/'}>
                                <button className="btn btn-dark w-100 fs-5" style={{ borderRadius: '25px' }}>
                                    Continue to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



     
     
        </>
    )
}

export default Cart
