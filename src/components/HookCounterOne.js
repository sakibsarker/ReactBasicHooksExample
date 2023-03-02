import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log("User update")
        document.title=` click ${count} time`
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={event=>setName(event.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Click {count}</button>
        </div>
  )
}

export default HookCounterOne