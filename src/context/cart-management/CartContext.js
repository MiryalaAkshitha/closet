import {createContext,useContext,useReducer, useEffect} from "react";
import {cartReducer,initialCart} from "./cartUtils.js";
const CartContext= createContext({cart:3});
const CartProvider=({children})=>{
    const [cartState,cartDispatch] = useReducer(cartReducer,initialCart);
    
    
    useEffect (()=>{
        // get local storage
        const localCart=JSON.parse(localStorage.getItem("cart"));
        if(localCart){
            console.log(localCart);
            cartDispatch({type:"SET_CART",payload:localCart});
        }
    },[]);
    console.log(cartState)
return(
    <CartContext.Provider value={{cartState,cartDispatch}}>{children}</CartContext.Provider>
    )
}
const useCart=()=>{
    return useContext(CartContext);
}
export{ CartProvider, useCart}