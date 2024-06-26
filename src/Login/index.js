import './index.css';
import { useState } from "react";
import { login } from './utils';
import React from 'react';
import{ Link} from 'react-router-dom';

const Login=()=>{   
        const[userName,setUserName]=useState("");
        const [password,setPassword]=useState(""); 
        console.log({userName}) ;
        console.log({password});

        const handleLogin= async(e)=>{
            e.preventDefault();
            console.log('Are we here');
            const result = await login ({username:userName,password});
            console.log({result});
        };
      
        
        return(

        <form onSubmit={handleLogin}>
            <h2> Login</h2>
            <input placeholder="Enter username" type="text" onChange={(e)=>setUserName(e.target.value)}/>
            <br/>
            <input placeholder=" Enter password" type="password" onChange={(e)=>setPassword(e.target.value)}/>

            <br/>
            <Link to = "/Users">
                <button type="submit">Login </button>
            </Link>
        </form>
    );
};
export default Login;