import axios from 'axios';

const url='http://localhost:8000';

export const authenticateSignup=async(user)=>{
    try{
    return axios.post(`${url}/signup`,user);
    }catch(error)
    {
        console.log('error while calling signup api');
    }
}

export const authenticateLogin=async(user)=>{
    try{
        return axios.post(`${url}/login`,user);
    }catch(error)
    {
        console.log('error while calling login api');
    }
}

export const saveOrder=async(order)=>{
    try{
        return axios.post(`${url}/order`,order);
    }catch(error){
        console.log('error while calling save order api');
    }
}

export const saveBooking=async(booking)=>{
    try{
        return axios.post(`${url}/booking`,booking);
    }catch(error){
        console.log('error while calling save booking api');
    }
}

export const cancelOrder=async(order)=>{
    try{
        return axios.post(`${url}/cancelOrder`,order);
    }catch(error){
        console.log('error while calling cancel order api');
    }
}

export const cancelBooking=async(booking)=>{
    try{
        return axios.post(`${url}/cancelBooking`,booking);
    }catch(error){
        console.log('error while calling cancel booking api');
    }
}

export const addProduct=async(product)=>{
    try{
    return axios.post(`${url}/addProduct`,product);
    }catch(error)
    {
        console.log('error while calling add product api');
    }
}

export const addVenue=async(venue)=>{
    try{
    return axios.post(`${url}/addVenue`,venue);
    }catch(error)
    {
        console.log('error while calling add venue api');
    }
}

export const addPhotographer=async(photographer)=>{
    try{
    return axios.post(`${url}/addPhotographer`,photographer);
    }catch(error)
    {
        console.log('error while calling add photographer api');
    }
}

export const addDecorator=async(decorator)=>{
    try{
    return axios.post(`${url}/addDecorator`,decorator);
    }catch(error)
    {
        console.log('error while calling add decorator api');
    }
}

export const updateProfile=async(change)=>{
    try{
    return axios.post(`${url}/updateProfile`,change);
    }catch(error)
    {
        console.log('error while calling update profile api');
    }
}

export const setRating=async(rate)=>{
    try{
        return axios.post(`${url}/rating`,rate);
    }catch(error){
        console.log('error while calling set rating api');
    }
}