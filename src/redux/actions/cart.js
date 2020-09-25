export const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';
export const REMOVE_PIZZA_FROM_CART = 'REMOVE_PIZZA_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const PLUS_CART_PIZZA = 'PLUS_CART_PIZZA';
export const MINUS_CART_PIZZA = 'MINUS_CART_PIZZA';

export const addPizzaToCart = (pizza) => ({ type: ADD_PIZZA_TO_CART, pizza });
export const removePizzaFromCart = (id) => ({ type: REMOVE_PIZZA_FROM_CART, id });
export const clearCart = () => ({ type: CLEAR_CART });
export const plusCartPizza = (id) => ({ type: PLUS_CART_PIZZA, id });
export const minusCartPizza = (id) => ({ type: MINUS_CART_PIZZA, id });
