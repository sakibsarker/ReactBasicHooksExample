import React from 'react'

function Title() {
    console.log("Render Title")
  return (
    <div>
        useCallback Hook
    </div>
  )
}

export default React.memo(Title)