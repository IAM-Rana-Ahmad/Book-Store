import Index from "./Pages";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import ViewBook from "./Pages/viewBook";
import Cart from "./Pages/cart";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Index/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/bookDetail" element={<ViewBook/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
