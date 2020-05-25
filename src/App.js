/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route,Switch, Redirect} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/header/Header';
import ShopPage from './pages/Shop/ShopPage';
import Checkout from './pages/checkout/Checkout';
import SignInPage from './pages/SignIn/SignIn-and-SignOut-Page';
import {auth , createUserProfileDocument} from './firebase/firebase.utils'
import './App.css'


const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.firebase.auth);

  const setUser = (user) => {
    dispatch({type:'LOAD_USER', user: user})
  }

  const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth); // checks if user exists in store and if not adds to store

      userRef.onSnapshot(snapShot => {
        setUser(snapShot.data());
      })
      console.log(userAuth, 'user');
    } else setUser(userAuth);

  }) 

  useEffect(() => {

    return ()=>{
      unsubscribeFromAuth();
    }
  }, [])

  console.log( "current user");
  

  return ( 
    <>
      <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' component={Checkout}/>
                <Route exact path ='/sign-in' render={() => isLoggedIn.uid ? (<Redirect to="/"/>) : (<SignInPage/>)}/>
            </Switch>
    </>
   );
}
 
export default App;
