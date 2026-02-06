import Card from "./components/Card"


function App() {
  let obj={
    username:"abid",
    age:20
  }

  return (
    <>
    
    <h1>props</h1>
    <br />
    <Card  username="card1" someobj={obj}/>
    <br />
    <Card username="card 2"/>

    </>
  )
}

export default App

