const initialState = {
    products: [],
    filters: {
        priceSort: "LOW_TO_HIGH",
        filterByCategory: [],
        filterByRating: null,
        filterByRange: 200,
        searchedProducts:[],
    }
}
const productReducer = (state, action) => {
    switch (action.type) {
        case "PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };

        case "PRICE_SORT":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    priceSort: action.payload,
                },
            };
        case "FILTER_BY_CATEGORY":
            let currCategory = action.payload;
            let categoryArray = state.filters.filterByCategory.includes(
                    currCategory
                ) ?
                state.filters.filterByCategory.filter(
                    (category) => category !== currCategory
                ) :
                [...state.filters.filterByCategory, currCategory];
            return {
                ...state,
                filters: {
                    ...state.filters,
                    filterByCategory: categoryArray
                },
            };
        case "FILTER_BY_RATING":
            return {
                ...state, filters: {
                    ...state.filters,
                    filterByRating: action.payload
                }
            };
        case "FILTER_BY_RANGE":
            return {
                ...state,filters:{
                    ...state.filters,filterByRange:action.payload
                }
            };
            case "RESET_FILTERS":
                return {
                  ...state,
                  filters: {
                    priceSort: "LOW_TO_HIGH",
                    filterByCategory: [],
                    filterByRating: [],
                    filterByRange: 200,
                  },
                };
        case "SEARCH_PRODUCTS":
            return {
                ...state,searchedProducts:action.payload
                }
            
                default:
                    return state;
    }
}

const sortData=(products,sortBy)=>{
return sortBy!==null && sortBy==="LOW_TO_HIGH"?
products.sort((a,b)=>a.price-b.price)
:sortBy==="HIGH_TO_LOW"
?products.sort((a,b)=>b.price-a.price)
:products;
};

const filterData=(
    products,
    categoryFilter,
    ratingFilter,
    rangeFilter
)=>{
    return products
    .filter(({categoryName})=>
        categoryFilter.length>0 ?categoryFilter.includes(categoryName):true
    )
    .filter(({rating})=>
        ratingFilter>0?rating>=ratingFilter:true
    )
    .filter(({price})=>
        rangeFilter > 200
        ? parseInt(price) >= rangeFilter && parseInt(price) <= 10000
        : true
    );

}
export { initialState, productReducer,sortData,filterData };

