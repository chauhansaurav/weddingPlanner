import axios from 'axios';
import * as actionV from '../constants/venueConstant.js';
import * as actionP from '../constants/photographerConstant.js';
import * as actionD from '../constants/decoratorConstant.js';

const url='http://localhost:8000';

export const getVenues = () =>async(dispatch)=>{
    try{
        const { data } =await axios.get(`${url}/venues`);
        dispatch({type:actionV.GET_VENUE_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:actionV.GET_VENUE_FAIL,payload:error.response});
    }
}

export const getPhotographers = () =>async(dispatch)=>{
    try{
        const { data } =await axios.get(`${url}/photographers`);
        dispatch({type:actionP.GET_PHOTOGRAPHER_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:actionP.GET_PHOTOGRAPHER_FAIL,payload:error.response});
    }
}

export const getDecorators = () =>async(dispatch)=>{
    try{
        const { data } =await axios.get(`${url}/decorators`);
        dispatch({type:actionD.GET_DECORATOR_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:actionD.GET_DECORATOR_FAIL,payload:error.response});
    }
}

export const getVenueDetails=(id)=> async(dispatch)=>{
    try{
        const {data} =await axios.get(`${url}/venue/${id}`);
        dispatch({type: actionV.GET_VENUE_DETAIL_SUCCESS,payload:data});
    }catch(error){
        dispatch({type: actionV.GET_VENUE_DETAIL_FAIL,payload:error.response});
    }
}

export const getPhotographerDetails=(id)=> async(dispatch)=>{
    try{
        const {data} =await axios.get(`${url}/photographer/${id}`);
        dispatch({type: actionP.GET_PHOTOGRAPHER_DETAIL_SUCCESS,payload:data});
    }catch(error){
        dispatch({type: actionP.GET_PHOTOGRAPHER_DETAIL_FAIL,payload:error.response});
    }
}

export const getDecoratorDetails=(id)=> async(dispatch)=>{
    try{
        const {data} =await axios.get(`${url}/decorator/${id}`);
        dispatch({type: actionD.GET_DECORATOR_DETAIL_SUCCESS,payload:data});
    }catch(error){
        dispatch({type: actionD.GET_DECORATOR_DETAIL_FAIL,payload:error.response});
    }
}

export const getBookings = () =>async(dispatch)=>{
    try{
        const { data } =await axios.get(`${url}/getBookings`);
        dispatch({type:'getBookingsSuccess',payload:data});
    }catch(error){
        dispatch({type:'getBookingsFail',payload:error.response});
    }
}