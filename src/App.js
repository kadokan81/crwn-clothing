import React, { Component } from 'react';
import HomePage from './pages/homePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import HatsPage from './pages/hats/Hats.component';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 

      <div>
        <Switch>
            <Route exact  path = '/' component= {HomePage}/>
            <Route path = '/hats' component= { HatsPage} />
        </Switch>
      
      </div>
     );
  }
}
 
export default App;