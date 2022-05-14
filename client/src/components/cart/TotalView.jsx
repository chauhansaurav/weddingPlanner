import {Box,Typography,Card} from '@material-ui/core';
import { useEffect } from 'react';
import {useState} from 'react';

const TotalView =({cartItems}) =>{

    const [price,setPrice] =useState(0);
    const [discount,setDiscount]=useState(0);

    useEffect(()=>{
        totalAmount();
    },[cartItems]);

    const totalAmount = () =>{
        let price=0,discount=0;
        cartItems.map(item=>{
            price+=item.price;
            discount+=(item.price*0.1);
        });
        setPrice(price);
        setDiscount(discount);
    }

    return(
        <Card style={{marginLeft:15,width:'30%',height:'40vh'}}>
            <Box>
                <Typography style={{padding:'16px 24px',borderBottom:'1px solid grey',color:'grey'}}>PRICE DETAILS</Typography>
            </Box>
   
            <Box style={{padding:'15px 24px'}}>
                <Typography style={{marginTop:20,fontSize:14}}>Price({cartItems.length} item) <span style={{float:'right'}}>Rs.{price}</span></Typography>
                <Typography style={{marginTop:20,fontSize:14}}>Discount <span style={{float:'right',color:'green'}}>-Rs.{discount}</span> </Typography>
                <Typography style={{marginTop:20,fontSize:14}}>Delivery Charges <span style={{float:'right',color:'green'}}>FREE</span></Typography>
                <Typography style={{marginTop:20,fontSize:14,fontWeight:'bold'}}>Total Amount <span style={{float:'right'}}>Rs.{price-discount}</span> </Typography>
            </Box>
        </Card>

    )
}

export default TotalView;