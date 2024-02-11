import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [todo,settodo] = useState("")
  const [todoaray,settodoaray] = useState([])
  const [edittodo,setedittodo] = useState("")
  const [edittodoarray,setedittodoarray] = useState([])

  useEffect(()=>{
localStorage.setItem('todo',JSON.stringify(todo))

  },[todo])


const delete_to_do = (index) =>{
const updatetodo = todoaray.filter((_,i) => i !== index)
settodoaray(updatetodo)
}

  /////// handle add todo start /////
const handle_add_todo = () =>{
if (todo.trim() !== ""){
settodoaray([...todoaray,todo])
settodo("")

}

}
const edittodoap = () =>{

  
}
  /////// handle add todo end /////
  return (
    <div className="App">
   
          <h1>TODO CRUD OPEARTION</h1>
          <h2>Task Start</h2>
          <input type='text' value={todo} placeholder='Add todo' onChange={((el) => settodo(el.target.value))}></input>
          <button onClick={handle_add_todo}>Add</button>

          <ul>
          {
            todoaray.map((el,index)=>{
              return(

                  <li key={index}> 
                  {

                    
                    edittodoarray === index  ? (

                      <>
                      <input type='text' value={edittodo} onChange={(el) => setedittodo(el.target.value)}><input/>
                      </>
                      )
                      :
                      (

                        <>
                        {el}
                        </>

                      )

                  } 
                  {el}
                  <button onClick={edittodoap}>Edit</button>
                  <button onClick={()=>delete_to_do(index)}>delete</button>
                  
                  </li>
              )

            

            })
          }
         
          </ul>


    
    </div>
  );
}

export default App;
