import { useState } from "react"


function App() {
const [color,setcolor]=useState("olive")
 return (
  <div className="main" style={{backgroundColor:color}}>
    <h1>Background changer</h1>
    <div className="bar">
      <button className="btn" style={{backgroundColor:"red"}}  onClick={()=>setcolor("red")}>Red</button>
      <button className="btn" style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}>Green</button>
      <button className="btn" style={{backgroundColor:"blue"}} onClick={()=>setcolor("blue")}>Blue</button>
      <button className="btn"style={{backgroundColor:"yellow"}} onClick={()=>setcolor("yellow")}>Yellow</button>

    </div>
  </div>
 )
}

export default App
