import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import rootReducer from './reducers/index'
import App from './App';
import * as serviceWorker from './serviceWorker';
import ShopPage from './pages/Shop/ShopPage';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/shop' component={ShopPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
