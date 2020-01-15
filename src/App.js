import React from 'react';
import HomePage from './pages/homePage/homePage';
import './App.css'
import { Route, Switch, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop-components';
import Header from './components/header/header-component';





function App() {
  return (
   
    <div className="App">
       <Header/>
      <Switch>
         <Route exact path = '/' component ={HomePage}  />
         <Route path = '/shop' component= {ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
