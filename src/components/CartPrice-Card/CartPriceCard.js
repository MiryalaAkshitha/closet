import "./CartPriceCard.css";
import {useCart} from "../../context/cart-management/CartContext.js";
const CartPriceCard=()=>{
const { cartState, cartDispatch } = useCart();
const totalPrice = cartState.reduce((acc, curr) => acc + curr.price, 0);
return (
  <div className="cart-price-card">
    <div className="cart-heading">PRICE DETAILS</div>
    <div className="total-price-value">
      Total Price is : <span class="total-price">Rs. {totalPrice}</span>
    </div>
    <div className="total-items-in-cart">
      Total No.of items are: {cartState?.length}
    </div>
    <div className="shipping-charge">Shipping: Free</div>
    <div className="total-price-value">Total Payable is : Rs. {totalPrice}</div>
    <button className="proceed-to-pay">PROCEED TO PAY</button>
  </div>
);
}
export default CartPriceCard;