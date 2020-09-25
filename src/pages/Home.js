import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, Pizza, PizzaLoader, SortPopup } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'asc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();

  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { categoryIndex, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);

  useEffect(() => {
    dispatch(fetchPizzas(categoryIndex, sortBy));
  }, [categoryIndex, sortBy, dispatch]);

  const selectActiveCategory = (index) => {
    dispatch(setCategory(index));
  };

  const selectActiveSortType = (sortBy) => {
    dispatch(setSortBy(sortBy));
  };

  const handleAddPizzaToCart = (pizza) => {
    dispatch(addPizzaToCart(pizza));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categories}
          activeCategory={categoryIndex}
          onClickCategoryType={selectActiveCategory}
        />
        <SortPopup
          items={sortItems}
          activeSortType={sortBy.type}
          onClickSortType={selectActiveSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => (
            <Pizza
              key={item.id}
              onClickAddPizza={handleAddPizzaToCart}
              addedPizzasToCart={cartItems[item.id] && cartItems[item.id].length}
              {...item}
            />))
          : Array(12).fill(0).map((_, index) => <PizzaLoader key={index} />)}
      </div>
    </div>
  );
};

export default Home;
