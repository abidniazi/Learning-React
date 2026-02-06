import { useState } from 'react'



function App() {

let [counter,setcounter]=useState(0)



let increment =()=>{
  // console.log("clicked",Math.random())
  // counter+1;
//   if(counter<20){
//   setcounter(counter+1)}
// }

   setcounter((prevcounter)=>prevcounter+1) //React batching
   setcounter((prevcounter)=>prevcounter+1)
   setcounter((prevcounter)=>prevcounter+1)
   setcounter((prevcounter)=>prevcounter+1)

}

let decrement =()=>{
  if(counter>0){
setcounter(counter-1)}
}



  return (<>
 <h1>this is counter {counter}</h1>
 <button onClick={increment}>Increment Value {counter}</button>
 <br /><br />
 <button onClick={decrement}>
  decrement value {counter}
 </button>
</>
  )
}

export default App
