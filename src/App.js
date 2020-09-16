import React, { useEffect, useState } from 'react';
import './App.css';
import { Redirect, Switch, Route } from 'react-router-dom';

import { Header } from './components';
import { Cart, Home } from './pages';

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('./db.json')
      .then(res => res.json())
      .then(data => {
        setPizzas(data.pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home items={pizzas} />
          </Route>
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
