import React,{useState} from 'react'
import useDoc from '../hooks/useDoc'

function DocTitleOne() {
    const[count,setCount]=useState(0)
    useDoc(count)
  return (
    <div><button onClick={()=>setCount(count+1)}>Count value {count}</button></div>
  )
}


export default DocTitleOne