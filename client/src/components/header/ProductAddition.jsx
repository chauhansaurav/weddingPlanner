import {TextField,Box,makeStyles,Button} from '@material-ui/core';
import { useState } from 'react';
import { addProduct } from '../../service/api.js';

const useStyle=makeStyles({
    container:{
        display:'flex',
        alignItems:'center',
        marginTop:70,
        backgroundImage:`url(${'https://cdn.pixabay.com/photo/2020/02/20/17/57/flower-4865379_1280.png'})`,
        backgroundRepeat:'no-repeat',
    },
    addproduct:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        '& >*':{
            marginTop:20,
        },
        alignItems:'center',
        paddingBottom:130
    }
})

var productInitial={
    id:'',
    image:'',
    name:'',
    rating:0,
    type:'',
    price:0
}

const ProductAddition =()=>{

        const classes=useStyle();

        const [product,setProduct]=useState(productInitial);

        const onInputChange=(e)=>{
            setProduct({...product,[e.target.name]:e.target.value});
        }
        const addP=async()=>{
            let response=await addProduct(product);
            if(!response) return;
        }

        return(

        <Box className={classes.container}>    
            <Box className={classes.addproduct}>

                <TextField onChange={(e)=>onInputChange(e)} name='id' label='Id'/>
                <TextField onChange={(e)=>onInputChange(e)} name='image' label='Image'/>
                <TextField onChange={(e)=>onInputChange(e)} name='name' label='Name'/>
                <TextField onChange={(e)=>onInputChange(e)} name='type' label='Type'/>
                <TextField onChange={(e)=>onInputChange(e)} name='price' label='Price'/>

                <Button variant="contained" onClick={()=>addP()} classname={classes.button} style={{background:'violet'}}>ADD PRODUCT</Button>
            </Box>
        </Box>
    )
}

export default ProductAddition;