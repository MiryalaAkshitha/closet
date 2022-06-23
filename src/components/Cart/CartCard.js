import React from 'react'
import axios from "axios";

import { useEffect } from 'react/cjs/react.production.min'
import { useCart } from '../../context/cart-management/CartContext.js'
import "./CartCard.css";


function CartCard() {
  const token = localStorage.getItem("token")
    const {cartState,cartDispatch} = useCart()
    const totalPrice=cartState?.reduce((acc,curr)=>acc+curr.price,0)
    console.log(totalPrice)
  console.log(cartState)
  const removeFromCart = async (product) => {
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`,
        {
          headers: { authorization: token }
        })
      if (response.status === 200) {
        cartDispatch({
          type: "DELETE_FROM_CART",
          payload: response.data.cart,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
      {cartState?.map((product) => (
        <div className="cart-listing-container">
          <div className="cart-container">
            <div key={product._id}>
              <div className="cart-product-card">
                <img
                  className="cart-product-img"
                  src={product.imageURL}
                  alt="image"
                />
                {/* <i className="wishlist-tag far fa-heart"></i> */}
                <div className="cart-product-details">
                  <div className="cart-product-title product-title">
                    {product.title}
                  </div>
                  <div className="cart-product-rating">
                    {product.rating}
                    <i class="fas fa-star"></i>
                  </div>
                  <div className="cart-product-des">{product.des}</div>
                  <div class="cart-item-qty">
                    Quantity :<button class="cart-item-count-btn">-</button>
                    {product.qty}
                    <button class="cart-item-count-btn">+</button>
                  </div>
                  <div className="cart-product-price">Rs. {product.price}</div>
                  <button
                    className="remove-from-cart"
                   onClick={()=>removeFromCart(product)}
                  >
                    REMOVE FROM CART
                  </button>
                  {/* <div>{product._id}</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

  );
}

export default CartCard

      
