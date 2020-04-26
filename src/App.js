import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {Route,Switch} from 'react-router-dom';
import rootReducer from './reducers/index'
import Homepage from './pages/Homepage';
import Header from './components/header/Header';
import ShopPage from './pages/Shop/ShopPage';
import SignInPage from './pages/SignIn/SignInPage';
import './App.css'

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path ='/sign-in' component={SignInPage}/>
            </Switch>
    </Provider>
    );
  }
}

export default App;
