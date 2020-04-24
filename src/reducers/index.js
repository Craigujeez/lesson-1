import {combineReducers} from 'redux';
import shop from './Shop.js'

const appReducer = combineReducers({
    shop,
})

const rootReducer = (state,action) => {
    return appReducer(state,action)
}
 
export default rootReducer;