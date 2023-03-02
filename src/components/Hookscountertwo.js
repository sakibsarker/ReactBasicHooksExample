import React,{useState} from 'react'

function Hookscountertwo() {
    const initialCount=0;
    const[count,setCount]=useState(initialCount);
   const incrementFive=()=>{
        for (let i=0;i<5;i++){
            setCount(preve=>preve+1)
        }

    }
  return (

    <div>
        Count:{count}
        <button onClick={()=>setCount(initialCount)}>click</button>
        <button onClick={()=>setCount(preve=>preve+1)}>Increment</button>
        <button onClick={()=>setCount(preve=>preve-1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default Hookscountertwo