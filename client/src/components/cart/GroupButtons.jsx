import {Button,ButtonGroup} from '@material-ui/core';
import {useState} from 'react';

const GroupButtons =()=>{

    const [counter,setCounter] =useState(1);
    const handleDecrement = () =>{
        setCounter(counter=>counter-1);
    }
    const handleIncrement = () =>{
        setCounter(counter=>counter+1);
    }
    return(
        <ButtonGroup style={{marginTop:30}}>
            <Button onClick={()=>handleDecrement()} disabled={counter===1}>-</Button>
            <Button>{counter}</Button>
            <Button onClick={()=>handleIncrement()}>+</Button>
        </ButtonGroup>
    )
}

export default GroupButtons;