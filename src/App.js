import React from 'react';
import Nav from './Components/shop/Nav';
import CategoriesBox from './Components/shop/CategoriesBox';
import ProductContainer from './Components/shop/ProductContainer';
import Form from './Form';

function App() {
  return (
    <div className="app">
      {/* <Form /> */}
      <Nav />
      <CategoriesBox />
      <ProductContainer />
    </div>
  );
}

export default App;
