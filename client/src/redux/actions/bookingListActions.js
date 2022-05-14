import *  as actionTypes from '../constants/bookingListConstant';
import axios from 'axios';

const url='http://localhost:8000';

export const addVenueToBookingList= (id) => async(dispatch)=>{

    try{
        const {data} =await axios.get(`${url}/venue/${id}`);
        dispatch({type:actionTypes.ADD_VENUE_TO_BOOKINGLIST,payload:data})

    }catch(error){
        console.log('Error while calling add venue to bookinglist api');
    }
}

export const removeVenueFromBookingList=(id)=>(dispatch)=>{
    dispatch({type:actionTypes.REMOVE_VENUE_FROM_BOOKINGLIST,payload:id})
}


export const addPhotographerToBookingList= (id) => async(dispatch)=>{

    try{
        const {data} =await axios.get(`${url}/photographer/${id}`);
        dispatch({type:actionTypes.ADD_PHOTOGRAPHER_TO_BOOKINGLIST,payload:data})

    }catch(error){
        console.log('Error while calling add photographer to bookinglist api');
    }
}

export const removePhotographerFromBookingList=(id)=>(dispatch)=>{
    dispatch({type:actionTypes.REMOVE_PHOTOGRAPHER_FROM_BOOKINGLIST,payload:id})
}


export const addDecoratorToBookingList= (id) => async(dispatch)=>{

    try{
        const {data} =await axios.get(`${url}/decorator/${id}`);
        dispatch({type:actionTypes.ADD_DECORATOR_TO_BOOKINGLIST,payload:data})

    }catch(error){
        console.log('Error while calling add decorator to bookinglist api');
    }
}

export const removeDecoratorFromBookingList=(id)=>(dispatch)=>{
    dispatch({type:actionTypes.REMOVE_DECORATOR_FROM_BOOKINGLIST,payload:id})
}