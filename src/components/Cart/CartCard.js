import React from 'react'

import { useEffect } from 'react/cjs/react.production.min'
import { useCart } from '../../context/cart-management/CartContext.js'
import "./CartCard.css";


function CartCard() {
    const {cartState,cartDispatch} = useCart()
    const totalPrice=cartState?.reduce((acc,curr)=>acc+curr.price,0)
    console.log(totalPrice)
    console.log(cartState)
  
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
                    onClick={() =>
                      cartDispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product._id,
                      })
                    }
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

      
