import { useEffect, useState } from 'react';
import axios from "axios";
import { useCart } from "../../context/cart-management/CartContext.js";

import { useProduct } from "../../context/Productcontext.js";
import "./Product-Cards.css";
import { Action } from 'history';
export const ProductCards = () => {
  const { productState, getData, sortData, filterData } = useProduct()
  const { cartState, cartDispatch } = useCart()

  const AddToCartHandler = async (product) => {
    const token = JSON.parse(localStorage.getItem("user"));
    //check product exists in cart
    const isExistInCart = cartState.find((item) => item._id === product._id);
    if (isExistInCart) {
      // increase quantity
      const newCart = cartState.map((item) => {
        if (item._id === product._id) {
          item.qty += 1;
        }
        return item;
      });
      cartDispatch({ type: "SET_CART", payload: newCart });
      localStorage.setItem("cart", JSON.stringify(cart.cart));

    } else {
      // add product to cart
      const { data: cart } = await axios.post("/api/user/cart", { product }, {
        headers: {
          authorization: token.encodedToken,
        },
      })
      cartDispatch({ type: "SET_CART", payload: cart.cart })
      // set items in local storage
      localStorage.setItem("cart", JSON.stringify(cart.cart));

    }
  }

// {data:cart}
  useEffect(() => {
    productState.products.length === 0 &&
      getData();
  }, [])
  const sortedData = sortData(productState.products, productState.filters.priceSort);
  const filteredAndSortedData = filterData(sortedData, productState.filters.filterByCategory, productState.filters.filterByRating, productState.filters.filterByRange);

  return (
    <>
      <div className="product-listing-container">
        <div className="product-container">
          {filteredAndSortedData?.map((product) => (

            <div key={product._id} className="product-card">
              <img
                className="product-img"
                src={product.imageURL}
                alt="image"
              />
              <i className="wishlist-tag far fa-heart"></i>
              <div className="product-details">
                <div className="product-rating">
                  {product.rating}
                  <i className="fas fa-star"></i>
                </div>
                <div className="product-title">{product.title}</div>
                <div className="product-des">{product.des}</div>
                <div className="product-price">Rs. {product.price}</div>
                <button className="add-to-cart" onClick={() => AddToCartHandler(product)}>
                  ADD TO CART</button>
                {/* <div>{product._id}</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}