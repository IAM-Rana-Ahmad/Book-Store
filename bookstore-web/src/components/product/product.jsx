import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../features/bookSlice';
import "../product/product.css";
import { addItem, addCartItem } from '../../features/bookSlice';
import { Link } from 'react-router-dom';

const Product = () => {
  const dispatch = useDispatch();
  const bookData = useSelector((state) => state.app.data);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const searchQuery = useSelector((state) => state.app.searchQuery);
  const loading = useSelector((state) => state.app.loading);

 


  const filterData = bookData.filter((book) =>
    book.volumeInfo.title.toUpperCase().includes(searchQuery.toUpperCase())
  );


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const displayedData = filterData.slice(startIndex, endIndex);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const viewMore = (book) => {
    dispatch(addItem(book));
  };

  const addToCart = (book) => {
    dispatch(addCartItem(book));
  };

  useEffect(() => {
    if (!bookData.length) {
      dispatch(getData());
    }
  }, [dispatch, bookData]);

  if (loading) {
    return (
      <div class="spinner-border d-flex mt-5 justify-content-center mx-auto" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    )
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-7 col-12 col-md-9 mt-5">
            <h1 className='fw-bold text-warning'>Popular books in Bookpress</h1>
            <p className='text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quos cupiditate, nemo debitis, explicabo voluptas.
            </p>
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-5">
          {displayedData.map((book) => (
            <div className="col-lg-3 my-3 col-md-6 col-12 d-flex justify-content-center" key={book.id}>
              <div className="card card-product" style={{ width: '18rem' }}>
                <img src={book.volumeInfo.imageLinks.smallThumbnail} className="card-img-top card-img" alt={book.volumeInfo.title} />
                <button className='btn text-warning fs-3 fw-bold w-25 add-wish bi bi-heart'></button>
                <div className="card-body">
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                  <p className="card-text">{book.volumeInfo.authors}</p>
                  <div>
                    <div className='d-flex justify-content-center'>
                      <Link to={"/bookDetail"}>
                        <button className='btn ' onClick={() => viewMore(book)}>View More</button>
                      </Link>
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

        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center">
            <button
              className="btn btn-primary me-2"
              onClick={handlePrevClick}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNextClick}
              disabled={endIndex >= filterData.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;



