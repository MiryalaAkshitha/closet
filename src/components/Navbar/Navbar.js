import "./Navbar.css";
import { useCart } from "../../context/cart-management/CartContext";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";



export const Navbar = () => {
  const [user, setUser] = useState(false)
  

  const { cartState, cartDispatch } = useCart();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
  setUser(true)
    } else {
      setUser(false)
    }
      
  }, [])
  const logoutHandler = () => {
    localStorage.clear("user")
    setUser(false)
  }
  
    return (
      <div className="nav-container">
        <nav className="nav-wrapper">
          <div className="title">CLOSET !!</div>
          <div className="nav-pills">
            <input
              className="nav-input"
              type="text"
              placeholder="what are you searching for ?"
            />

            <i className="wishlist-icon fas fa-2x fa-heart"></i>
            <Link to="/cart">
              <div className="cart-container">
                <button className="cart-btn">
                  <i className="bag-icon fas fa-2x fa-shopping-bag"></i>
                  <span className="cart-count">{cartState?.length}</span>
                </button>
              </div>
            </Link>
            {user ? <button onClick={logoutHandler}>logout</button> : <Link to="/login">
              <div className="nav-login">login</div>
            </Link>}

            <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR332niECXQzBEG3rRciWHTZ0e8IrpaeiMwMA&usqp=CAU"
            />
          </div>
        </nav>
      </div>
    );

}