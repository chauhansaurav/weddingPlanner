import {Typography,Menu,MenuItem,makeStyles} from '@material-ui/core';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    component:{
        marginBottom:40,
    }
})

const Profiles =({profile,setProfile})=>{
    const [open,setOpen]=useState(false);
    const classes=useStyle();

    const handleClose =()=>{
        setOpen(false);
    }

    const handleClick =(event)=>{
        setOpen(event.currentTarget)
    }

    const logout =()=>{
        setProfile(false);
    }

    return(
        <>
            <Link><Typography onClick={handleClick}>{profile}</Typography></Link>
            <Menu
                anchorE1={open}
                open={Boolean(open)}
                onClose={handleClose} 
                className={classes.component}>

                <MenuItem onClick={()=>{handleClose();logout();}}>Logout</MenuItem>

            </Menu>
        </>

    )
} 

export default Profiles;