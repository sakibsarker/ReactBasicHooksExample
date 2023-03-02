import React ,{useState,useEffect,useRef}from 'react'

function HookTimer() {
    const [time,setTime]=useState(0)
    const intervalRef=useRef()
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTime(preTime=>preTime+1)
        },1000)
        return()=>{
            clearInterval(intervalRef.current)
        }
        
    },[])
    
  return (
    <div>HookTimer-{time}
    <button onClick={()=>clearInterval(intervalRef.current)}>Clear Interval</button></div>
  )
}

export default HookTimer