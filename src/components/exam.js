import React, { useState, useEffect } from 'react';

function MouseHook() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = event => {
    console.log('Mouse Event');
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);

    // cleanup function
    return () => {
      console.log('Component unmounted');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return <div>MouseHook X-{x} Y-{y}</div>;
}

export default MouseHook;
