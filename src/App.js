import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/home/Home'
import Nav from './Components/shop/Nav';
import CategoriesBox from './Components/shop/CategoriesBox';
import ProductContainer from './Components/shop/ProductContainer';
import Form from './Form';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    // <div className="app">
    //   {/* <Form /> */}
    //   <Nav />
    //   <CategoriesBox />
    //   <ProductContainer />
    // </div>
  );
}

export default App;
