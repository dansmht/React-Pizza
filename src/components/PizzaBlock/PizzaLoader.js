import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoader = () => (
  <ContentLoader
    speed={1}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="125" r="125" />
    <rect x="0" y="270" rx="6" ry="6" width="280" height="24" />
    <rect x="0" y="314" rx="6" ry="6" width="280" height="84" />
    <rect x="0" y="422" rx="0" ry="0" width="104" height="27" />
    <rect x="136" y="411" rx="20" ry="20" width="140" height="44" />
  </ContentLoader>
);

export default PizzaLoader;
