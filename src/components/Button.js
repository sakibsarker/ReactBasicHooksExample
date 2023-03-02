import React from 'react'

function Button({hendleClick,children}) {
    console.log(`Rendering button `,children)
  return (
    <div>
        <button onClick={hendleClick}>
            {children}
        </button>
    </div>
  )
}

export default React.memo(Button)