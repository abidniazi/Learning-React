import React,{useState,useContext} from "react";
import UserContext from "../context/Usercontext";

function Login(){
   
   
   
    const [username,setusername]=useState("");      
    const [password,setpassword]=useState("");
    const {setuser}=useContext(UserContext);

    function onsubmit(e){
        e.preventDefault();
        // store user as an object so Profile can read `user.username`
        setuser({ username, password });
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" 
            placeholder="usrname"
            value={username}
             onChange={(e)=>setusername(e.target.value)}
            />
            <input type="password" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <button onClick={onsubmit}>submit</button>

        </div>
    )
}

export default Login;