import React, { Component } from 'react';
import HomePage from './pages/homePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/ShopPage.component';


class App extends Component {
  state = {  }
  render() { 
    return ( 

      <div>
        <Switch>
            <Route exact  path = '/' component= {HomePage}/>
            <Route path = '/shop' component= { ShopPage} />
        </Switch>
      
      </div>
     );
  }
}
 
export default App;