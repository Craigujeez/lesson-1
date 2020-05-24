import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import shop from './Shop.js'

const appReducer = combineReducers({
    shop,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

const rootReducer = (state,action) => {
    return appReducer(state,action)
}
 
export default rootReducer;