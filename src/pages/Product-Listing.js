import "./Product-Listing.css"
import {Navbar} from "../components/Navbar/Navbar.js";
import {ProductCards} from "../components/Product-Cards/Product-Cards.js";
import {Filter} from "../components/Filter/Filter.js";

export const ProductListing = () => {
  return (
<>
      <Navbar />
      <div className="product-listing-container">
      <Filter/>
      <ProductCards/>
      </div>
  
    </>
  );
}
