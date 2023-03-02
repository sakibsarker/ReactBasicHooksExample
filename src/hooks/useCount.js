import {useState} from 'react'

function useCount(initialvalue=0,value) {
    const[count,setCount]=useState(initialvalue,value)
    const increment=()=>{
        setCount(preCount=>preCount+value)
    }
    const decrement=()=>{
        setCount(preCount=>preCount-value)
    } 
    const reset=()=>{
        setCount(initialvalue)
    }
    return [count,increment,decrement,reset]
}

export default useCount