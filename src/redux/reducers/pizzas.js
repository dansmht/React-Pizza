import { SET_LOADED, SET_PIZZAS } from '../actions/pizzas';

const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, { type, items, isLoaded }) => {
  switch (type) {
    case SET_PIZZAS:
      return {
        ...state,
        items,
        isLoaded: true,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded,
      };
    default:
      return state;
  }
};

export default pizzas;
