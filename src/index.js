import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import {ProductProvider} from "./context/Productcontext.js";
import {CartProvider} from "./context/cart-management/CartContext.js";
import { AuthProvider } from "./context/auth-context/AuthContext"
import {WishlistProvider} from "./context/wishlist-management/wishlistContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WishlistProvider>
      <ProductProvider>
        <CartProvider>
        <App />
        </CartProvider>
          </ProductProvider>
        </WishlistProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
