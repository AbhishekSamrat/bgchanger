import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
const [color,setcolor] = useState("smoke")


  return (
    
    <div className="App" style={{backgroundColor:color,width:"100%",height:"1000px"}}>
   
          <h1>BG CHANGER</h1>
          <button className='red' onClick={()=>setcolor("red")}  style={{backgroundColor:"red"}}>Red</button>
          <button className='blue' onClick={()=>setcolor("blue")}>Blue</button>
          <button className='green' onClick={()=>setcolor("green")}>Green</button>
          <button className='pink' onClick={()=>setcolor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
          <button className='pink' onClick={()=>setcolor("black")} style={{backgroundColor:"black",color:"white"}}>Black</button>
          <button className='pink' onClick={()=>setcolor("crimson")} style={{backgroundColor:"crimson"}}>Crimson</button>
          <button className='pink' onClick={()=>setcolor("darkblue")} style={{backgroundColor:"darkblue"}}>Darkblue</button>
          
     

            

    </div>
     );
}

export default App;
