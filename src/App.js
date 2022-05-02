import "./App.css";
import { Homepage } from "./pages/Homepage.js";
import {ProductListing} from "./pages/Product-Listing.js";
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/products" element={<ProductListing/>} />
  </Routes>
  )

}

export default App;
