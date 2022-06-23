
const initialCart=[]
const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      case "DELETE_FROM_CART":
      console.log(action.payload)
      return action.payload;
    

    // case "ADD_TO_CART":
    //   const isExist=state.find(item=>item._id===action.payload._id)
    //   let newState=[]
    //   if(!isExist){
    //     // set item in local storage
    //     newState = [...state, action.payload]
    //     localStorage.setItem("cart",JSON.stringify(newState));
    //   }
    //  return isExist ? state:newState;

     
    // case "REMOVE_FROM_CART":
    //         const existInCart = state.find(
    //           (item) => item._id === action.payload
    //         );
    //         if (existInCart) {
    //           const newCart = state.filter(
    //             (item) => item._id !== action.payload
    //           );
    //           localStorage.setItem("cart", JSON.stringify(newCart));
    //           return newCart;
    //         }

    
      ;
  }
};

export { cartReducer,initialCart};
