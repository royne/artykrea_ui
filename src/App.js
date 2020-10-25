import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/home/Home'
import Products from './Components/products/Products';
import Form from './Form';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Form} />
        <Route exact path="/:category" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
