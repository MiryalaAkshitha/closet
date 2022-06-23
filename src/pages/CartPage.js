 import {Navbar} from "../components/Navbar/Navbar.js";
 import CartCard from "../components/Cart/CartCard.js";
 import CartPriceCard from "../components/CartPrice-Card/CartPriceCard.js";
 import "./CartPage.css"
 
 const Cart=()=>{
    return(
        <>
        <Navbar/>
        <div className="cart-page-container">
        <CartCard/>
        <CartPriceCard/>
        </div>
    
<h1>THIS IS A CART-PAGE</h1>
</>
    )

    
}
export {Cart}