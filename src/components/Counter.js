import React, { useState,useMemo } from 'react'

function Counter() {
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)


    const incrementOne=()=>{
        setCounterOne(counterOne+1)
        console.log('One called')
    }

    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
        console.log('Two called')
    }

    const isEven=useMemo(()=>{
        let i=0
        while(i<20000) i++
        return counterOne % 2 ===0
    },[counterOne])

   

  return (
    <div>
        <div>
            <button onClick={incrementOne}>Counter One-{counterOne}</button>
            <span>{isEven?'Even':'Odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>Counter Two -{counterTwo}</button>
        </div>
    </div>
  )
}

export default Counter