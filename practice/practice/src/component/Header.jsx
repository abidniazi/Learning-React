import React, { useState } from "react";

function Header({value}){
const [count,setcount]=useState(0)
return(
<>
<h1>Header : {value}</h1>
<input type="text" />



{/* <button onClick={()=>{setcount(count+1)}} >Click{count}</button> */}
</>

)
}

export default Header;