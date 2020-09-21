import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, Pizza, SortPopup } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'alphabet', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(({ pizzas }) => pizzas);
  const { categoryIndex, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas())
  }, [categoryIndex, sortBy, dispatch])

  const selectActiveCategory = (index) => {
    dispatch(setCategory(index));
  };

  const selectActiveSortType = (sortBy) => {
    dispatch(setSortBy(sortBy));
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
          activeSortType={sortBy}
          onClickSortType={selectActiveSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => <Pizza key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
