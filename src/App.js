/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useSelector} from 'react-redux';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/header/Header';
import ShopPage from './pages/Shop/ShopPage';
import SignInPage from './pages/SignIn/SignIn-and-SignOut-Page';
// import {auth , createUserProfileDocument} from './firebase/firebase.utils'
import './App.css'


const App = () => {
  // const dispatch = useDispatch();
  const currentUser = useSelector(state => state.shop.user)

  // const setUser = (user) => {
  //   dispatch({type:'LOAD_USER', user: user})
  // }

  // let unsubscribeFromAuth = null;

  // useEffect(() => {
  //   unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

  //     if(userAuth){
  //       const userRef = await createUserProfileDocument(userAuth); // checks if user exists in store and if not adds to store

  //       userRef.onSnapshot(snapShot => {
  //         setUser(snapShot.data());
  //       })
  //       console.log(userAuth, 'user');
  //     } else setUser(userAuth);

  //   }) 

  //   return ()=>{
  //     unsubscribeFromAuth();
  //   }
  // }, [])

  console.log(currentUser, "current user");
  

  return ( 
    <>
      <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path ='/sign-in' component={SignInPage}/>
            </Switch>
    </>
   );
}
 
export default App;
