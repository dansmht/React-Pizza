export const SET_PIZZAS = 'SET_PIZZAS';
export const SET_LOADED = 'SET_LOADED';

export const setPizzas = items => ({ type: SET_PIZZAS, items });
export const setLoaded = isLoaded => ({ type: SET_LOADED, isLoaded });

export const fetchPizzas = () => async dispatch => {
  dispatch(setLoaded(false))
  const response = await fetch('http://localhost:3001//db.json');
  const { pizzas } = await response.json();

  dispatch(setPizzas(pizzas));
};
