import React, { useContext, useEffect, useReducer } from "react";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions/actions";
import reducer from "../reducers/cart_reducer";

const initialState = {};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value="cart context">{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
