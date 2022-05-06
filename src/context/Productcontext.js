import { createContext, useContext } from "react";
import { initialState,productReducer,sortData,filterData } from "./productUtils.js";
import { products } from "../backend/db/products.js";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {

  const [productState,productDispatch] =useReducer(productReducer,initialState);

  const getData = () => {
    return axios
      .get("/api/products")
      .then((response) => productDispatch({type:"PRODUCTS",payload:response.data.products}));
  };

  

  // console.log(products);
  return (
    <ProductContext.Provider value={{productState,productDispatch,sortData,filterData,getData }}>
      {children}
    </ProductContext.Provider>
  );
}
