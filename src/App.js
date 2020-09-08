import React from 'react';
import Nav from './Components/shop/Nav';
import CategoriesBox from './Components/shop/CategoriesBox';
import ProductContainer from './Components/shop/ProductContainer';

function App() {
  return (
    <div className="app">
      <Nav />
      <CategoriesBox />
      <ProductContainer />
    </div>
  );
}

export default App;
