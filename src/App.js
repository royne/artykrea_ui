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
        <Route exact path="/:category" component={Products} />
        <Route exact path="/abc" component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
