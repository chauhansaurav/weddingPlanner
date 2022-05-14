import {Box,Typography,Card} from '@material-ui/core';
import { useEffect } from 'react';
import {useState} from 'react';

const TotalView =({bookingListItems}) =>{

    const [fee,setFee] =useState(0);

    useEffect(()=>{
        totalAmount();
    },[bookingListItems]);

    const totalAmount = () =>{
        let fee=0;
        bookingListItems.map(item=>{
            fee+=item.fee;
        });
        setFee(fee);
    }

    return(
        <Card style={{marginLeft:15,width:'30%',height:'40vh'}}>
            <Box>
                <Typography style={{padding:'16px 24px',borderBottom:'1px solid grey',color:'grey'}}>FEE DETAILS</Typography>
            </Box>
   
            <Box style={{padding:'15px 24px'}}>
                <Typography style={{marginTop:20,fontSize:14}}>Wedding Cost({bookingListItems.length} booking) <span style={{float:'right'}}>Rs.{fee}</span></Typography>
            </Box>
        </Card>

    )
}

export default TotalView;