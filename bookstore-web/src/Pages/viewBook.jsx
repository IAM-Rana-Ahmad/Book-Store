import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem } from '../features/bookSlice';
import { Link } from 'react-router-dom';

const ViewBook = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.app.Info);
    const allData = useSelector((state) => state.app.data)
    const addToCart = (book) => {
        dispatch(addCartItem(book));
    };
    return (
        <>
            <Navbar />
            <div className="container-fluid bg-dark">
                <div className="row p-3">
                    <div className="col-lg-7 text-white p-5 col-12">
                        <h1 className='display-4 fw-bold text-warning'>BOOKS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sed aspernatur pariatur iste excepturi quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas asperiores quaerat autem minima? Non, optio.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5 my-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">

                        <img src={data.volumeInfo.imageLinks.smallThumbnail} width={"100%"} alt="" />

                    </div>
                    <div className="col-lg-5 mt-3">
                        <h1 className='text-warning'>TITLE:</h1>
                        <h2 className='mb-5'>{data.volumeInfo.title}</h2>
                        <p className='fs-5'>Authors:</p>
                        <p>{data.volumeInfo.authors}</p><hr />
                        <p className='fs-5'>Publisher:</p>
                        <p>{data.volumeInfo.publisher}</p><hr />
                        <p className='fs-5'>Published Data:</p>
                        <p>{data.volumeInfo.publishedDate}</p><hr />
                        <p className='fs-5'>Category:</p>
                        <p>{data.volumeInfo.categories}</p><hr />

                        <div className='d-flex justify-content-end'>
                         <Link to={"/"}>
                         <button className='btn  btn-warning btn-lg'>Go Back</button>
                         </Link>
                        </div>
                    </div>

                </div>


            </div>

            <div className="container ">
                <div className="row">
                    <div className="col-lg-9">
                        <h2>Description:</h2>
                        <p>{data.volumeInfo.description}</p>
                    </div>
                </div>
            </div>



            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>Pick The Related Books:</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    {allData.slice(0, 4).map((book) => (
                        <div className="col-lg-3 my-3 col-md-6 col-12 d-flex justify-content-center" key={book.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={book.volumeInfo.imageLinks.smallThumbnail} className="card-img-top card-img" alt={book.volumeInfo.title} />
                                <button className='btn text-warning fs-3 fw-bold w-25 add-wish bi bi-heart'></button>
                                <div className="card-body">
                                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                                    <p className="card-text">{book.volumeInfo.authors}</p>
                                    <div>
                                        <div className='d-flex justify-content-center'>
                                        </div>
                                        <button className="btn btn-primary w-100" onClick={() => addToCart(book)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ViewBook;

