export const authInitialState = {
    token: null,
    isLoggedIn: false,
    cart: [],
    wishlist:[]
}
 

export const authReducer = (authState, authDispatch) => {
    const {type,payload} = authDispatch
    switch (authDispatch.type) {
        case "SIGN-UP":
            return {
                ...authState,
                ...payload.createdUser,
               token:localStorage.getItem("token"),
            }
        case "LOGIN":
            return {
                ...authState,
                ...payload.foundUser,
                token: localStorage.getItem("token"),
                isLoggedIn: true,
            }
        case "LOGOUT":
            return {
                ...authInitialState
            }
        default:
            return {
                ...authState 
            }
    }
}