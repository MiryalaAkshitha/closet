const wishlist = []
const wishlistReducer = (state, action) => {
    switch (action.type) {
        case "GET_WISHLIST":
        case "ADD_TO_WISHLIST":
        case "DELETE_FROM_WISHLIST":
            return {
                ...state, wishlist: action.payload
            }
    }
}
export {wishlistReducer}