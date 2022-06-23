import { useWishlist } from "../context/wishlist-management/wishlistContext"
export const Wishlist = () => {
    
    const { wishlistState, removeFromWishList } = useWishlist()
console.log(wishlistState)
    return (
        
    // )
// }
        <>
            <div className="product-listing-container">
                <div className="product-container">
                    <h1>wishlist</h1>
                    {wishlistState.wishlist?.map((product) => (

                        <div key={product._id} className="product-card">
                            <img
                                className="product-img"
                                src={product.imageURL}
                                alt="image"
                            />
                            <i className="wishlist-tag far fa-heart" onClick={() => removeFromWishList(product)}></i>
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
    )
}