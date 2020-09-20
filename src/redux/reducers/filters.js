import { SET_CATEGORY, SET_SORT_BY } from '../actions/filters';

const initialState = {
  categoryIndex: null,
  sortBy: 'popular',
};

const filters = (state = initialState, { type, categoryIndex, sortBy }) => {
  switch (type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy,
      };
    case SET_CATEGORY:
      return {
        ...state,
        categoryIndex,
      };
    default:
      return state;
  }
};

export default filters;
