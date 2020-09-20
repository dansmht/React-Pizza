import React from 'react';
import { useSelector } from 'react-redux';

import { Categories, SortPopup } from '../components';
import Pizza from '../components/Pizza';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'alphabet', order: 'asc' },
];

const Home = () => {
  const items = useSelector(({ pizzas }) => pizzas.items);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => <Pizza key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
