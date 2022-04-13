
import { useState } from 'react';
import './App.css';
import { Todo } from './components/todo';

function App() {

  // var data  = "hello c1"

  // const [message , setMessage] = useState("")

  // const getdata = (data) =>
  // {
  //   console.log("showing the data from the child :",data)
  //   setMessage(data)
  // }
  return (
    <div className="App">
      {/* <First pass = {getdata}/>
      <Second  message = {message}/> */}

      <Todo/>

    </div>
  );
}

// function First({pass}){
//   var dataa = "hello parent"

//   console.log(pass(dataa))

//   return <div>First</div>
// }

// function Second({message}){
//   console.log("Got data from the sibling" , message)
//   return <div>second</div>
// }

export default App;
