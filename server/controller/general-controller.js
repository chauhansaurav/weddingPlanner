import Product from '../model/productSchema.js';
import {venue} from '../model/bookingSchema.js';
import {photographer} from '../model/bookingSchema.js';
import {decorator} from '../model/bookingSchema.js';

export const getProducts = async(request,response)=>{
    try{
        const products=await Product.find({});
        response.json(products);
    }catch(error){
        console.log('Error: ',error.message);
    }
}

export const getVenues = async(request,response)=>{
    try{
        const venues=await venue.find({});
        response.json(venues);
    }catch(error){
        console.log('Error: ',error.message);
    }
}

export const getPhotographers = async(request,response)=>{
    try{
        const photographers=await photographer.find({});
        response.json(photographers);
    }catch(error){
        console.log('Error: ',error.message);
    }
}

export const getDecorators = async(request,response)=>{
    try{
        const decorators=await decorator.find({});
        response.json(decorators);
    }catch(error){
        console.log('Error: ',error.message);
    }
}

export const getProductById =async (request,response)=>{
    try{
        const product=await Product.findOne({'id':request.params.id});
        response.json(product);

    }catch(error){
        console.log('Error: ',error.message);
    }
}

export const getVenueById =async (request,response)=>{
    try{
        const Venue=await venue.findOne({'id':request.params.id});
        response.json(Venue);

    }catch(error){
        console.log('Error: ',error.message);
    }
}

export const getPhotographerById =async (request,response)=>{
    try{
        const Photographer=await photographer.findOne({'id':request.params.id});
        response.json(Photographer);

    }catch(error){
        console.log('Error: ',error.message);
    }
}

export const getDecoratorById =async (request,response)=>{
    try{
        const Decorator=await decorator.findOne({'id':request.params.id});
        response.json(Decorator);

    }catch(error){
        console.log('Error: ',error.message);
    }
}

export const addProduct =async(request,response)=>{

    try{
        const product=request.body;
        const newProduct=new Product(product);
        await newProduct.save();

        response.status(200).json('Product is successfully added');
    }catch(error)
    {
        console.log('Error:',error.message);
    }
}

export const addVenue =async(request,response)=>{

    try{
        const Venue=request.body;
        const newVenue=new venue(Venue);
        await newVenue.save();

        response.status(200).json('Venue is successfully added');
    }catch(error)
    {
        console.log('Error:',error.message);
    }
}

export const addPhotographer =async(request,response)=>{

    try{
        const Photographer=request.body;
        const newPhotographer=new photographer(Photographer);
        await newPhotographer.save();

        response.status(200).json('Photographer is successfully added');
    }catch(error)
    {
        console.log('Error:',error.message);
    }
}

export const addDecorator =async(request,response)=>{

    try{
        const Decorator=request.body;
        const newDecorator=new decorator(Decorator);
        await newDecorator.save();

        response.status(200).json('Decorator is successfully added');
    }catch(error)
    {
        console.log('Error:',error.message);
    }
}

export const setRating = async(request,response)=>{

    try{
        const change =request.body;
        var category=change.type;
        if(category=="product"){
            const Pro=await Product.findOne({'id':change.part});
            var query={id:change.part};
            var updatequery={$set:{rating:(Pro.rating+change.rating)/2}};
            Product.updateOne(query,updatequery,function(err){});
        }
        if(category=="venue"){
            const Ven=await venue.findOne({'id':change.part});
            var query={id:change.part};
            var updatequery={$set:{rating:(Ven.rating+change.rating)/2}};
            venue.updateOne(query,updatequery,function(err){});
        }
        if(category=="photographer"){
            const Pho=await photographer.findOne({'id':change.part});
            var query={id:change.part};
            var updatequery={$set:{rating:(Pho.rating+change.rating)/2}};
            photographer.updateOne(query,updatequery,function(err){});
        }
        if(category=="decorator"){
            const Dec=await decorator.findOne({'id':change.part});
            var query={id:change.part};
            var updatequery={$set:{rating:(Dec.rating+change.rating)/2}};
            decorator.updateOne(query,updatequery,function(err){});
        }

    }catch(error){
        console.log('Error: ',error.message);
    }
}