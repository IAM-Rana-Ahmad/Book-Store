import Navbar from "../components/navbar/navbar"
import Hero from "../components/Hero/hero"
import Product from "../components/product/product"
import Authors from "../components/autors/authors"
import Footer from "../components/footer/footer"
import Blog from "../components/blogs/blog"

const index = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Product/>
     <Authors/>
     <Blog/>
     <Footer/>
    </>
  )
}

export default index
