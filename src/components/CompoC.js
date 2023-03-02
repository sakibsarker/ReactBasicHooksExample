import React, { useContext } from 'react'
import { CountContext } from '../App'
function CompoC() {
    const countContext=useContext(CountContext)
  return (
    <div>CompoB{countContext.countState}
    <button onClick={()=>countContext.countDispatch('increment')}>Increment </button>
    <button onClick={()=>countContext.countDispatch('decrement')}>Decrement </button>
    <button onClick={()=>countContext.countDispatch('reset')}>Rest </button></div>
  )
}

export default CompoC