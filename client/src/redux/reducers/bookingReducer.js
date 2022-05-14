import * as actionVenueType from '../constants/venueConstant';
import * as actionPhotographerType from '../constants/photographerConstant';
import * as actionDecoratorType from '../constants/decoratorConstant';

export const getVenuesReducer=(state ={venues:[]},action)=>{
    switch(action.type){
        case actionVenueType.GET_VENUE_SUCCESS:
            return {venues:action.payload}

        case actionVenueType.GET_VENUE_FAIL:
            return {error:action.payload}

         default:
             return state 
    }
}

export const getPhotographersReducer=(state ={photographers:[]},action)=>{
    switch(action.type){
        case actionPhotographerType.GET_PHOTOGRAPHER_SUCCESS:
            return {photographers:action.payload}

        case actionPhotographerType.GET_PHOTOGRAPHER_FAIL:
            return {error:action.payload}

         default:
             return state 
    }
}

export const getDecoratorsReducer=(state ={decorators:[]},action)=>{
    switch(action.type){
        case actionDecoratorType.GET_DECORATOR_SUCCESS:
            return {decorators:action.payload}

        case actionDecoratorType.GET_DECORATOR_FAIL:
            return {error:action.payload}

         default:
             return state 
    }
}

export const getVenueDetailsReducer =(state={venue:{}},action)=>{
    switch(action.type){
        case actionVenueType.GET_VENUE_DETAIL_SUCCESS:
            return {venue:action.payload}
        case actionVenueType.GET_VENUE_DETAIL_FAIL:
            return {error:action.payload}   
        default:
            return state     
    }

}

export const getPhotographerDetailsReducer =(state={photographer:{}},action)=>{
    switch(action.type){
        case actionPhotographerType.GET_PHOTOGRAPHER_DETAIL_SUCCESS:
            return {photographer:action.payload}
        case actionPhotographerType.GET_PHOTOGRAPHER_DETAIL_FAIL:
            return {error:action.payload}   
        default:
            return state     
    }

}

export const getDecoratorDetailsReducer =(state={decorator:{}},action)=>{
    switch(action.type){
        case actionDecoratorType.GET_DECORATOR_DETAIL_SUCCESS:
            return {decorator:action.payload}
        case actionDecoratorType.GET_DECORATOR_DETAIL_FAIL:
            return {error:action.payload}   
        default:
            return state     
    }
}

export const getBookingsReducer=(state ={bookings:[]},action)=>{
    switch(action.type){
        case 'getBookingsSuccess':
            return {bookings:action.payload}

        case 'getBookingsFail':
            return {error:action.payload}

         default:
             return state 
    }
};