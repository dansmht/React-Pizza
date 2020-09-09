import React, { useState } from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const isActive = (index) => {
    return activeItem === index ? 'active' : '';
  };

  const selectActiveItem = (index) => {
    setActiveItem(index);
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
