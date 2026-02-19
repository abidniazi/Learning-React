
import Button from './component/button'
import Header from './component/Header'
function App() {

  const clickHandler=()=>{
    alert("button clicked")
  }
  return (
  <>
  <h1>Practice</h1>
<Header  value="Hello from App"  age={33} />
<Header value="Another Header Value" />
<Button onClickHandler={clickHandler}/>
  </>
  )
}

export default App
