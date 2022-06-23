import { createContext, useContext, useReducer, useEffect } from "react";
import { wishlistReducer } from "./wishlistUtilis";
import axios from "axios";
const WishlistContext = createContext({ });
const WishlistProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer,{wishlist:[]});

    const token = localStorage.getItem("token");
    // (async () => {
    //     try {
    //         const response = await axios.get("/api/user/wishlist", {
    //             headers :{authorization:token}
    //         })
    //         console.log(response.data.wishlist)
    //         if (response.data.status === 200) {
    //             wishlistDispatch({type:"GET_WISHLIST",payload:response.data.wishlist})
    //         }
    //     }
    //     catch (error){
    //         console.log(response.data.error)
    //     }
    // })()
        (async () => {
            try {
                console.log(token)
                const response = await axios.get('/api/user/wishlist',
                    {
                        headers: { authorization: token }
                    });
                if (response.data.status === 200) {
                    wishlistDispatch({
                        type: "GET_WISHLIST",
                        payload: response.data.wishlist
                    })
                }
                
            }
            catch (error) {
                console.log(error.response.data)
            }
    })()
    const addToWishList = async (product) => {
        
            try {
                const response = await axios.post("/api/user/wishlist",
                    { product },
                    {
                        headers: { authorization: token }
                    }
                )
                if (response.status === 201) {
                    wishlistDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: response.data.wishlist
                    })
                }
            }
            catch (error) {
                console.log(error)
            }
        }
     
console.log(wishlistState.wishlist)
    const removeFromWishList = async (product) => {
        try {
            const response = await axios.delete(`/api/user/wishlist/${product._id}`,
                {
                    headers: { authorization: token }
                })
            if (response.status === 200) {
                wishlistDispatch({
                    type: "DELETE_FROM_WISHLIST",
                    payload: response.data.wishlist,
                })
            }

        }
        catch (error) { console.log(error) }
    }
    
    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch,addToWishList,removeFromWishList}}>{children}</WishlistContext.Provider>
    )
}
const useWishlist = () => {
    return useContext(WishlistContext);
}
export { WishlistProvider, useWishlist}