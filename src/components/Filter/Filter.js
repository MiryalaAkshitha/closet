import "./Filter.css";
import { useProduct } from "../../context/Productcontext";

export const Filter = () => {
  const{productState,productDispatch} = useProduct();
    return (
      <>
        <div className="filter-wrapper">
          <div className="filter-headings">
            <div className="filter-title">FILTERS!</div>
            <button className="filter-clr-btn"
            onClick={()=>productDispatch({type:"RESET_FILTERS"})}
            >
              clear</button>
          </div>

          {/* price-filter */}
          <div className="filter-block">
          <div className="filter-subtitle">Price</div>
          <div className="filter-price-range-input">
            <input type="range"
      
             min={200}
             max={10000}
             step={100}
             value={productState.filters.filterByRange}
             onChange={(e)=>productDispatch({type:"FILTER_BY_RANGE",payload:e.target.value})} 
             />
             <span>{productState.filters.filterByRange}</span>
          </div>
          </div>
          {/* category-filter  */}
          <div className="filter-block">
            <span className="filter-subtitle">
              Category</span>
            <label htmlFor="category-one">
              <input type="checkbox" 
              id="cateogory-one" 
              value="kurthi" 
              onChange={(e)=>productDispatch({type:"FILTER_BY_CATEGORY",payload:e.target.value})}
              />Kurthi
            </label>


            <label for="category-two">
              <input
                type="checkbox"
                id="cateogory-two"
                value="floral-dress"
                onChange={(e)=>productDispatch({type:"FILTER_BY_CATEGORY",payload:e.target.value})}
                />

              Floral-Dresses
            </label>
            <label htmlFor="category-three">
              <input type="checkbox"
               id="cateogory-three" 
               value="Tops"
               onChange={(e)=>productDispatch({type:"FILTER_BY_CATEGORY",payload:e.target.value})} 
               />
              Tops
            </label>
          </div>
          {/* rating-filter  */}
          <div className="filter-block">
            <span className="filter-subtitle">Rating </span>
            <label htmlFor="four-and-above">
              <input type="radio"
               id="four-and-above"
                value= {4}
                // checked={productState.filters.filterByRating===4}
                name="filter-by-rating"
                onChange={(e)=>productDispatch({type:"FILTER_BY_RATING",payload:e.target.value})}
                />
                4 star &
              above
            </label>
            <label htmlFor="three-and-above">
              <input type="radio"
               id="three-and-above"
                value={3}
                name="filter-by-rating"
                // checked={productState.filters.filterByRating===3}
                onChange={()=>productDispatch({type:"FILTER_BY_RATING",payload:e.target.value})}
                
                />3 star &
              above
            </label>
            <label htmlFor="two-and-above">
              <input type="radio"
               id="two-and-above"
                value={2}
                name="filter-by-rating"
                onChange={(e)=>productDispatch({type:"FILTER_BY_RATING",payload:e.target.value})}
                 />2 star &
              above
            </label>
            <label htmlFor="one-star">
              <input type="radio"
               id="one-star"
                value={1}
                name="filter-by-rating"
                onChange={(e)=>productDispatch({type:"FILTER_BY_RATING",payload:e.target.value})}
                
                />1 star
            </label>
          </div>

          {/* sort-by-price  */}
          <div className="filter-block">
            <span className="filter-subtitle">
              Sort by</span>
            <label htmlFor="low_to_high">
              <input type="radio" 
              id="low_to_high"
              name="sort-by-price"
              value="LOW_TO_HIGH"
              checked={productState.filters.priceSort==="LOW_TO_HIGH"}
              onChange={(e)=>productDispatch({type:"PRICE_SORT",payload:e.target.value})}
              /> Price - Low to High
            </label>
            <label htmlFor="high_to_low">
              <input type="radio"
               id="high_to_low"
               name="sort-by-price"
                value="HIGH_TO_LOW"
                checked={productState.filters.priceSort==="HIGH_TO_LOW"}
                onChange={(e)=>productDispatch({type:"PRICE_SORT",payload:e.target.value})}
                
                />
              Price - High to Low
            </label>
          </div>
          
        </div>
      </>
    );
}