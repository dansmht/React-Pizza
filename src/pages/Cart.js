import React from 'react';
import emptyCartSrc from '../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Корзина пустая <span role="img" aria-label="sad">😕</span></h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.<br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={emptyCartSrc} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
