import { useState,useCallback, useEffect ,useRef } from 'react'


function App() {

  const [length,setLength]=useState(8);
  const [NumberAllowed,setNumberAllwoed]=useState(false);
  const [CharAllowed,setCharAllowed]=useState(false);
  const [password,setpassword]=useState("");


  const passwordGenrator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(NumberAllowed) str +="0123456789";
    if(CharAllowed) str +="`!@#$%^&*(){}-_";

  for(let i=1;i<=length;i++){
    var char= Math.floor(Math.random()*str.length+1);
    pass += str.charAt(char)
}
// console.log(pass)
setpassword(pass)
  },[length,NumberAllowed,CharAllowed,setpassword])

  const copyPasswordToClipboard=()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

useEffect(()=>{passwordGenrator()},[length,NumberAllowed,CharAllowed,passwordGenrator])
// passwordGenrator()
const passwordRef=useRef(null);
return(
  <div className="main">
    <div className="box">
   <h1>Password Genrator</h1>
   <input type="text" className="input" placeholder="Password" value={password} readOnly ref={passwordRef}
    /> 
   <button className='copy' onClick={copyPasswordToClipboard}>Copy</button> <br />
<div className="buttom">
<input type="range" min={8} max={100} value={length} 
onChange={(e)=>{
setLength(e.target.value)
}}
/>
<label >Length:{length}</label>

<input type="checkbox" 
defaultChecked={NumberAllowed}
onChange={()=>{
  setNumberAllwoed(prev=>!prev)
}}

/>
<label >Numbers</label>

<input type="checkbox" 
 defaultChecked={CharAllowed}
 onChange={()=>{
 setCharAllowed( prev=>!prev) 
 }}
  
 />
<label >Characters</label>
</div>
</div>
  </div>
) 
}

export default App
