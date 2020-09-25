export const SET_PIZZAS = 'SET_PIZZAS';
export const SET_LOADED = 'SET_LOADED';

export const setPizzas = items => ({ type: SET_PIZZAS, items });
export const setLoaded = isLoaded => ({ type: SET_LOADED, isLoaded });

export const fetchPizzas = (category, { type: sortBy, order }) => async dispatch => {
  dispatch(setLoaded(false))

  const queryString = `?${category !== null ? `category=${category}&` : ''}_sort=${sortBy}&_order=${order}`
  const response = await fetch(`/pizzas${queryString}`);
  const pizzas = await response.json();

  dispatch(setPizzas(pizzas));
};
