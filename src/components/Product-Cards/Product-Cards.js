import { useEffect , useState } from 'react';



import {useProduct} from "../../context/Productcontext.js";
import "./Product-Cards.css";
export  const ProductCards = () => {
    const {productState,getData,sortData,filterData} =useProduct()
    useEffect(()=>{
       productState.products.length===0 && 
       getData();
    },[])
    const sortedData=sortData(productState.products,productState.filters.priceSort);
    const filteredAndSortedData=filterData(sortedData,productState.filters.filterByCategory,productState.filters.filterByRating,productState.filters.filterByRange);
    
    return (
      <>
        <div className="product-listing-container">
          <div className="product-container">
            {filteredAndSortedData?.map((product) => (
            
              <div className="product-card">
                <img
                  className="product-img"
                  src={product.imageURL}
                  alt="image"
                />
                <i className="wishlist-tag far fa-heart"></i>
                <div className="product-details">
                  <div className="product-rating">
                    {product.rating}
                    <i class="fas fa-star"></i>
                  </div>
                  <div className="product-title">{product.title}</div>
                  <div className="product-des">{product.des}</div>
                  <div className="product-price">Rs. {product.price}</div>
                  <button className="addto-cart">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
    }