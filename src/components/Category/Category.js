import "../Category/Category.css";
import { Link } from "react-router-dom";

import { useProduct } from "../../context/Productcontext";

export const Category = () => {
    const { productState, productDispatch } = useProduct();

  return (
    <div className="category-container">
      <div className="kurthi-img-wrapper">
        <img
          className="category-img kurthi-img"
          src="https://www.signaturekesavi.com/wp-content/uploads/2020/10/5-banner-2-1200x700.jpg"
          alt="image"
        />
      
        <Link to ="/products"onClick={()=>productDispatch({type:"FILTER_BY_CATEGORY",payload:"kurthi"})}
          className="kurthi-btn">
          Shop Kurthis
        </Link>
      
      </div>
      <div className="dresses-img-wrapper">
        <img
          className="category-img dresses-img"
          src="https://www.deebaco.com/blog/wp-content/uploads/2021/09/Floral-Blog.jpg"
          alt="image"
        />
        <button className="dresses-btn">Shop Dresses</button>
      </div>
      <div className="tops-img-wrapper">
        <img
          className="category-img tops-img"
          src="https://cdn.zivame.com/media/mimages/category/SCB_Apparel_By-Category_tops-and-t-shirts-CBz_15_03.jpg"
          alt="image"
        />
        <button className="tops-btn">Shop Tops</button>
      </div>
    </div>
  );
};
