import {
  ADD_PIZZA_TO_CART,
  CLEAR_CART,
  MINUS_CART_PIZZA,
  PLUS_CART_PIZZA,
  REMOVE_PIZZA_FROM_CART,
} from '../actions/cart';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => {
  return arr.reduce((acc, cur) => acc + cur.price, 0);
};

const cart = (state = initialState, { type, pizza, id }) => {
  switch (type) {
    case ADD_PIZZA_TO_CART:
      const currentPizzaItems = !state.items[pizza.id]
        ? [pizza]
        : [...state.items[pizza.id].items, pizza];

      return {
        ...state,
        items: {
          ...state.items,
          [pizza.id]: {
            items: currentPizzaItems,
            totalPrice: getTotalPrice(currentPizzaItems),
          },
        },
        totalPrice: state.totalPrice + pizza.price,
        totalCount: state.totalCount + 1,
      };
    case REMOVE_PIZZA_FROM_CART: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[id].totalPrice;
      const currentTotalCount = newItems[id].items.length;
      delete newItems[id];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case CLEAR_CART:
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    case PLUS_CART_PIZZA: {
      const newPizza = { ...state.items[id].items[0] };
      const newItemsArr = [
        ...state.items[id].items,
        newPizza,
      ];

      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            items: newItemsArr,
            totalPrice: getTotalPrice(newItemsArr),
          },
        },
        totalPrice: state.totalPrice + newPizza.price,
        totalCount: state.totalCount + 1,
      };
    }
    case MINUS_CART_PIZZA: {
      let deletedPizza,
        totalPrice = state.totalPrice,
        totalCount = state.totalCount,
        pizzaTotalPrice = state.items[id].totalPrice;

      const newItemsArr = [
        ...state.items[id].items,
      ];

      if (newItemsArr.length > 1) {
        deletedPizza = newItemsArr.pop();
        totalPrice -= deletedPizza.price;
        totalCount -= 1;
        pizzaTotalPrice = getTotalPrice(newItemsArr);
      }

      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            items: newItemsArr,
            totalPrice: pizzaTotalPrice,
          },
        },
        totalPrice,
        totalCount,
      };
    }
    default:
      return state;
  }
};

export default cart;
