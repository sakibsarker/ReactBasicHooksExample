import React, { useEffect, useState } from 'react'

function MouseHook() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const logMousePositon=event=>{
        console.log('Move called');
        setX(event.clientX)
        setY(event.clientY)
    }

   useEffect(() => {
    console.log('use effect called');
    window.addEventListener('mousemove',logMousePositon);

    return () => {
        console.log('ummouted');
        window.removeEventListener('mouse move',logMousePositon);
    };

   }, []);
  return <div> x-{x} y-{y}</div>
}

export default MouseHook;