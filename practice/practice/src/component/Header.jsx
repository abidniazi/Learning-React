import React, { useEffect, useRef, useState } from "react";

function Header({value,age="22"}){
const [text,settext]=useState("")
// useEffect(()=>{
//     alert(`text entered${text}`)
// },[text])
const inputfocus=useRef(null)

const focusinput=()=>{
    inputfocus.current.focus();
}

return(
<>
<h1>Header : {value} :{age}</h1>
<input type="text" placeholder="pass" 
value={text}
onChange={(e)=>settext(e.target.value)}
/>
<p>yoou typed: {text}</p>
<br /><br />

<input ref={inputfocus} />
<button onClick={focusinput}>focuus</button>
<br /><br />





{/* <button onClick={()=>{setcount(count+1)}} >Click{count}</button> */}
</>

)
}

export default Header;