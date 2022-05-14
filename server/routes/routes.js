import express from 'express';
import {userSignup,userLogin,updateProfile} from '../controller/user-controller.js';
import {getProducts,getVenues,getPhotographers,getDecorators,getProductById,getVenueById,getPhotographerById,getDecoratorById,addProduct,addVenue,addPhotographer,addDecorator,setRating} from '../controller/general-controller.js';
import {userOrder,cancelOrder,getOrders} from '../controller/order-controller.js';
import {userBooking,cancelBooking,getBookings} from '../controller/booked-controller.js';

const router=express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getProducts);
router.get('/venues',getVenues);
router.get('/photographers',getPhotographers);
router.get('/decorators',getDecorators);

router.get('/product/:id',getProductById);
router.get('/venue/:id',getVenueById);
router.get('/photographer/:id',getPhotographerById);
router.get('/decorator/:id',getDecoratorById);

router.post('/order',userOrder);
router.post('/booking',userBooking);
router.post('/cancelOrder',cancelOrder)
router.post('/cancelBooking',cancelBooking);

router.post('/addProduct',addProduct);
router.post('/addVenue',addVenue);
router.post('/addPhotographer',addPhotographer);
router.post('/addDecorator',addDecorator);

router.get('/getOrders',getOrders);
router.get('/getBookings',getBookings);

router.post('/updateProfile',updateProfile);
router.post('/rating',setRating);

export default router;