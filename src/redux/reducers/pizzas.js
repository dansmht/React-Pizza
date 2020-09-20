import { SET_PIZZAS } from '../actions/pizzas';

const initialState = {
  items: [],
};

const pizzas = (state = initialState, { type, items }) => {
  switch (type) {
    case SET_PIZZAS:
      return {
        ...state,
        items,
      };
    default:
      return state;
  }
};

export default pizzas;
