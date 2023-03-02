import React,{useState} from 'react'
import MouseHook from './MouseHook'
function MouseContainer() {
    const[display,setDisplay]=useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
   {display && <MouseHook/>} </div>
  )
}

export default MouseContainer