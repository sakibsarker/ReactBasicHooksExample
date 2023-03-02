import React from 'react'
import useCount from '../hooks/useCount'

function CounteOne() {
    const [count,increment,decrement,reset]=useCount(10,10)
  return (
    <div>
        {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounteOne