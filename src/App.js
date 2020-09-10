import React from 'react';
import './App.css';
import { Redirect, Switch, Route } from 'react-router-dom';

import { Header } from './components';
import { Cart, Home } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
