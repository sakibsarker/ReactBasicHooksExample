import React from 'react'
import useInput from '../hooks/useInput'

function UserFrom() {

    const[firstname,bindfirstname,resetfirstname]=useInput('')
    const[lastname,bindlastname,resetlastname]=useInput('')


    const subHendler=(event)=>{
        event.preventDefault()
        alert(`Hello ${firstname} and ${lastname}`)
        resetfirstname()
        resetlastname()
        
    }

  return (
    <div>
        <form onSubmit={subHendler}>
            <div>
                <label>First name</label>
                <input {...bindfirstname} type="text"/>
            </div>
            <div>
                <label>Last name</label>
                <input {...bindlastname} type="text"/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserFrom