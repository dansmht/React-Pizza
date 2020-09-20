import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

const Categories = ({ items }) => {
  const dispatch = useDispatch();

  const activeCategory = useSelector(({ filters }) => filters.categoryIndex);

  const isActive = (index) => {
    return activeCategory === index ? 'active' : '';
  };

  const selectActiveItem = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={isActive(null)}
          onClick={() => selectActiveItem(null)}
        >
          Все
        </li>
        {items.map((name, index) => (
          <li
            key={`${name}_${index}`}
            className={isActive(index)}
            onClick={() => selectActiveItem(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
