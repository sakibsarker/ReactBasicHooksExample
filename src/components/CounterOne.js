import React,{useReducer} from 'react'

const initalState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initalState
        default:
            return state
    }

}

function CounterOne() {
    const[count,dispatch]=useReducer(reducer,initalState)
  return (
    <div>
        <button onClick={()=>dispatch('increment')}>Increment {count}</button>
        <button onClick={()=>dispatch('decrement')}>Decrement {count}</button>
        <button onClick={()=>dispatch('reset')}>Rest {count}</button>
    </div>
  )
}

export default CounterOne