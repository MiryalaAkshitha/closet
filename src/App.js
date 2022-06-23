import "./App.css";
import { Homepage } from "./pages/Homepage.js";
import {ProductListing} from "./pages/Product-Listing.js";
import {Routes,Route} from "react-router-dom";
import { Cart } from "./pages/CartPage.js";
import { Wishlist} from "./pages/WishListPage.js"
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup.js";
import NotFound from "./pages/NotFound.js";
import MockmanEs from "mockman-js";



function App() {
  return (
    
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/products" element={<ProductListing/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path ="/wishlist" element={<Wishlist/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/mock" element={<MockmanEs/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  )

}

export default App;
