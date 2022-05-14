import { useEffect,useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { Box,makeStyles,Typography,Button,TextField} from "@material-ui/core";
import {useHistory} from 'react-router-dom';

import CartItem from './CartItem';
import {removeFromCart} from '../../redux/actions/cartActions';
import TotalView from "./TotalView";

import {cancelOrder, saveOrder} from '../../service/api.js';
import UserProfile from "../../context/UserProfile";

const useStyle=makeStyles({
    component:{
        marginTop:60,
        padding:'30px 135px',
        display:'flex'
    },
    leftComponent:{
        width:'67%'
    },
    header:{
        padding:'15px 24px'
    },
    placeOrder:{
        background:'deeppink',
        color:'white',
        borderRadius:2,
        width:250,
        height:50,
        display:'flex',
        marginLeft:'auto'
    },
    cancelOrder:{
        background:'white',
        color:'red',
        borderRadius:2,
        width:250,
        height:50,
        display:'flex',
        marginLeft:'auto',
        marginTop:20,
    },
    bottom:{
        padding:'16px 22px',
    }
})

const Cart =() =>{

    const classes=useStyle();
    const {cartItems} =useSelector(state=>state.cart);

    const dispatch=useDispatch();

    useEffect(()=>{

    })

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id));
    }

    const history=useHistory();

    const addItem=()=>{
        history.push('/');
    }

    const [Shipping,setShipping]=useState(null);
    const onInputChange=(e)=>{
        setShipping(e.target.value);
    }
    var date=new Date(new Date());
    var order={
        id:'',
        userName:'',
        price:0,
        shipping:'',
        time:''
    }
    const placeOrder=()=>{
        cartItems.map(item=>{
            order.id=item.id;
            order.userName=UserProfile.getName();
            order.price=item.price;
            order.shipping=Shipping;
            order.time=date.toDateString();
            saveOrder(order);
        });
    }

    const cancellation=()=>{
        cartItems.map(item=>{
            order.id=item.id;
            order.userName=UserProfile.getName();
            order.price=item.price;
            order.shipping=Shipping;
            order.time=date.toDateString();
            cancelOrder(order);
        });
    }

    return(
        <>
            {
                cartItems.length ?
                <Box className={classes.component}>
                    <Box className={classes.leftComponent}>

                        <Box className={classes.header} style={{fontWeight:600,fontSize:18}}>
                            My Cart ({cartItems.length})
                        </Box>

                        {
                            cartItems.map(item=>(
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }

                        <Box className={classes.bottom}>
                            <TextField onChange={(e)=>onInputChange(e)} name='Shipping' label='Shipping Address'/>
                            <Button variant="contained" className={classes.placeOrder} onClick={()=>placeOrder()}>Place Order</Button>
                            <Button variant="contained" className={classes.cancelOrder} onClick={()=>cancellation(order)}>Cancel Order</Button>
                        </Box>

                    </Box>

                    <TotalView cartItems={cartItems} />
                </Box>
                :
                <Box style={{textAlign:'center',paddingTop:70,margin:'80px 140px'}}>
                    <Typography style={{fontSize:20,fontWeight:'bolder'}}>Your Cart is Empty</Typography>
                    <Typography>Add Items to it now</Typography>
                    <Button onClick={()=>addItem()} style={{background:'deeppink',color:'white',padding:'12px 70px',marginTop:20}}>Shop Now</Button>
                </Box>

            }
        </>

        
    )
}

export default Cart;