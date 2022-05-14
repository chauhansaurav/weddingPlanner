import * as actionTypes from '../constants/bookingListConstant';

export const bookingListReducer=(state={bookingListItems:[]},action)=>{

    switch(action.type){
        case actionTypes.ADD_VENUE_TO_BOOKINGLIST:

            const itemV=action.payload;

            const existV =state.bookingListItems.find(venue=>venue.id===itemV.id);

            if(existV) return;

            return {...state,bookingListItems:[...state.bookingListItems,itemV]}

        case  actionTypes.REMOVE_VENUE_FROM_BOOKINGLIST:
            return {...state,bookingListItems:state.bookingListItems.filter(venue=>venue.id!==action.payload)}




        case actionTypes.ADD_PHOTOGRAPHER_TO_BOOKINGLIST:

            const itemP=action.payload;

            const existP =state.bookingListItems.find(photographer=>photographer.id===itemP.id);

            if(existP) return;

            return {...state,bookingListItems:[...state.bookingListItems,itemP]}

        case  actionTypes.REMOVE_PHOTOGRAPHER_FROM_BOOKINGLIST:
            return {...state,bookingListItems:state.bookingListItems.filter(photographer=>photographer.id!==action.payload)} 


    
        case actionTypes.ADD_DECORATOR_TO_BOOKINGLIST:

            const itemD=action.payload;

            const existD =state.bookingListItems.find(decorator=>decorator.id===itemD.id);

            if(existD) return;

            return {...state,bookingListItems:[...state.bookingListItems,itemD]}

        case  actionTypes.REMOVE_DECORATOR_FROM_BOOKINGLIST:
            return {...state,bookingListItems:state.bookingListItems.filter(decorator=>decorator.id!==action.payload)}        


            
        default:
            return state;    
    }
}