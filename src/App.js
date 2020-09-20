import React, { useEffect } from 'react';
import './App.css';
import { Redirect, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

import { Header } from './components';
import { Cart, Home } from './pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('./db.json')
      .then(res => res.json())
      .then(data => {
        dispatch(setPizzas(data.pizzas));
      });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
