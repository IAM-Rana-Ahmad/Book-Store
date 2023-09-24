import React from 'react'
import "../blogs/blog.css"

const Blog = () => {
    return (
        <>
            <div className="container-fluid bg-light" id='blogs'>
                <div className="container mt-5 ">

                    {/* BLOG HEADING */}
                    <div className="row d-flex justify-content-center pt-5">
                        <div className="col-lg-7 text-center">
                            <h1 className='fw-bold text-warning'>Our Blogs & Latest News</h1>
                            <p>  Lorem ipsum dolor sit amet, consectetur adipisicing t, consectetur adipisicing elit. Ut quos cupiditate, nemo debitis, explicabo voluptas </p>
                        </div>
                    </div>
                </div>


                {/* BLOGS CARDS */}
                <div className="container mt-5 my-5">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card blog-card shadow-lg h-100">
                                <img src="https://bookpresstheme.com/multi/wp-content/uploads/sites/2/2017/01/blog-post6-1-360x225.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Lany book that help a child to a habit.</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card blog-card shadow-lg h-100">
                                <img src="https://bookpresstheme.com/multi/wp-content/uploads/sites/2/2017/01/blog-post3-1-360x225.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Many sites where you can order your fav book.</h5>
                                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card blog-card shadow-lg h-100">
                                <img src="https://bookpresstheme.com/multi/wp-content/uploads/sites/2/2017/01/blog-post-single-1-360x225.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">What you dont know whould make a great book.</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
