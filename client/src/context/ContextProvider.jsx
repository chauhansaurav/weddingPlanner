import { useState } from 'react';
import {createContext} from 'react';

export const LoginContext=createContext(null);

const ContextProvider =({children})=>{

    const [profile,setProfile]=useState('');

    return(
        <LoginContext.Provider
        value={{profile,setProfile}}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;