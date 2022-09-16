import React, { useContext, useEffect, useReducer } from "react";
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../reducers/actions/actions";
import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  // all_products stays the same after filtering. If we want to go back, we just set the filter products to all products
  all_products: [],
  grid_view: true,
  sort: "name-a",
  filters: {
    text: "",
    category: "all",
    edition: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  // Order of call important, so it sorts by name-a(default sort) on page load
  useEffect(() => {
    // Filter first, since it changes the amount of displayed products
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    // Just the value needed
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  };

  // Calls every time we change filters
  const updateFilters = (e) => {
    let name = e.target.name;
    // 1. Side note: cant access the button value, just input
    let value = e.target.value;
    // 2. Solution
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "edition") {
      value = e.target.textContent;
    }
    // Since slider converts into a string
    if (name === "price") {
      value = Number(value);
    }
    // Radio button
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
