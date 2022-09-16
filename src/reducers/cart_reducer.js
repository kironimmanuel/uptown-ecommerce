import { toast } from "react-toastify";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "./actions/actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, edition, amount, product } = action.payload;
      const tempProduct = state.cart.find((item) => item.id === id + edition);
      // If item already exist in cart, we check for duplicate and increase amount
      if (tempProduct) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + edition) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });

        return { ...state, tempCart };
      } else {
        // Create new product, if it doesn't already exist in cart
        const newProduct = {
          id: id + edition,
          name: product.name,
          image: product.image,
          edition,
          amount,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newProduct] };
      }
    }

    case TOGGLE_CART_ITEM_AMOUNT: {
      const { id, value } = action.payload;
      const tempCart = state.cart.map((item) => {
        // Id already the value of: id + edition (e.g. "3243253625hard cover")
        if (item.id === id) {
          if (value === "increase") {
            let newAmount = item.amount + 1;
            // Check if amount is not exceeding the stock amount
            if (newAmount > item.max) {
              toast.warn("Max stock availability reached", {
                toastId: "custom-id-yes",
              });
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          if (value === "decrease") {
            let newAmount = item.amount - 1;
            // Check if amount is not exceeding the stock amount
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });
      return { ...state, cart: tempCart };
    }

    case REMOVE_CART_ITEM: {
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: tempCart };
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }

    case COUNT_CART_TOTALS: {
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { price, amount } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        { total_items: 0, total_amount: 0 }
      );

      let newShippingFee;
      if (total_amount > 3000) {
        newShippingFee = 0;
      } else {
        newShippingFee = 799;
      }

      return {
        ...state,
        shipping_fee: newShippingFee,
        total_items,
        total_amount,
      };
    }

    default:
      throw new Error(`action type : ${action.type} does not exist`);
  }
};

export default cart_reducer;
