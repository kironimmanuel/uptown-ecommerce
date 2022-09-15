import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions/actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((product) => product.price);
      // We cant pass in the array directly, use spread operator
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        // Important to always have all_products array copy when filtering
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice,
        },
      };
    case SET_GRIDVIEW:
      return {
        ...state,
        grid_view: true,
      };
    case SET_LISTVIEW:
      return {
        ...state,
        grid_view: false,
      };

    // Control he sort state value
    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      // Copy the filtered_products
      let tempProducts = [...filtered_products];
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => {
          // Elaborate syntax
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return {
        ...state,
        // If no sorting matches, we display default to prevent empty array
        filtered_products: tempProducts,
      };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };
    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, edition, price, shipping } = state.filters;
      // Before filtering, we copy the all_products array
      let filteredProducts = [...all_products];
      if (text) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().startsWith(text.toLowerCase())
        );
      }
      if (category !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === category
        );
      }
      // Edition is an array
      if (edition !== "all") {
        filteredProducts = filteredProducts.filter((product) => {
          return product.edition.find((p) => p === edition);
        });
      }

      filteredProducts = filteredProducts.filter(
        (product) => product.price <= price
      );

      if (shipping) {
        filteredProducts = filteredProducts.filter(
          (product) => product.shipping === shipping
        );
      }
      return {
        ...state,
        filtered_products: filteredProducts,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          edition: "all",
          // to set price back to max
          price: state.filters.max_price,
          shipping: false,
        },
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
