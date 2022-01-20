import {combineReducers} from 'redux';

//reducers
import restaurant from "./restaurant/restaurant.reducer";
import cart from "./cart/cart.reducer"
import auth from "./auth/auth.reducer"
import review from "./review/review.reducer"


const rootReducer = combineReducers({
   restaurant, cart, auth, review
})

export default rootReducer;