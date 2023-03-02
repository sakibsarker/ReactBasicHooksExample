import React from 'react'
import useCount from '../hooks/useCount'

function CounteTwo() {
    const [count,increment,decrement,reset]=useCount(0,1)
  return (
    <div>
        {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounteTwo