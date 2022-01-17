import {combineReducers} from 'redux';

//reducers
import restaurant from "./restaurant/restaurant.reducer";
import cart from "./cart/cart.reducer"


const rootReducer = combineReducers({
   restaurant, cart
})

export default rootReducer;