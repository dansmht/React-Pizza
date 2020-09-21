import React from 'react';

const Categories = React.memo(({ items, activeCategory, onClickCategoryType }) => {
  const isActive = (index) => {
    return activeCategory === index ? 'active' : '';
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={isActive(null)}
          onClick={() => onClickCategoryType(null)}
        >
          Все
        </li>
        {items.map((name, index) => (
          <li
            key={`${name}_${index}`}
            className={isActive(index)}
            onClick={() => onClickCategoryType(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
