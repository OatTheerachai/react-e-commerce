import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/cartAction";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const updateItem = [...state.cartItems, action.payload];
      return {
        ...state,
        cartItems: updateItem,
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
