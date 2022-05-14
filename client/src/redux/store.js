import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {getProductsReducer,getProductDetailsReducer,getOrdersReducer} from './reducers/productReducer.js';
import {getVenuesReducer,getPhotographersReducer,getDecoratorsReducer,getVenueDetailsReducer,getPhotographerDetailsReducer,getDecoratorDetailsReducer,getBookingsReducer} from './reducers/bookingReducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cartReducer} from './reducers/cartReducer';
import { bookingListReducer } from './reducers/bookingListReducer.js';

const reducer=combineReducers({
    getProducts:getProductsReducer,
    getVenues:getVenuesReducer,
    getPhotographers:getPhotographersReducer,
    getDecorators:getDecoratorsReducer,
    getProductDetails:getProductDetailsReducer,
    getVenueDetails:getVenueDetailsReducer,
    getPhotographerDetails:getPhotographerDetailsReducer,
    getDecoratorDetails:getDecoratorDetailsReducer,
    cart:cartReducer,
    bookingList:bookingListReducer,
    getOrders:getOrdersReducer,
    getBookings:getBookingsReducer
})

const middleware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;