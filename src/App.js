import React, { Component } from 'react';
import HomePage from './pages/homePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './pages/Head.component/Head.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './fierbase/fierbase.utils';


class App extends Component {

  state = {  
       currentUser: null
      }

      unsubscribeFromAuth = null

 componentDidMount(){
    this.unsubscribeFromAuth =
     auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user });

    console.log(user);
  });
 }

 componentWillUnmount(){
   this.unsubscribeFromAuth()
 }

  render() { 
    return ( 

      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
            <Route exact  path = '/' component= {HomePage}/>
            <Route path = '/shop' component= { ShopPage} />
            <Route path = '/sign-in' component= { SignInSignUp} />
        </Switch>
      
      </div>
     );
  }
}
 
export default App;