import React, { useEffect, useState } from 'react'

const WidthreSize = () => {
  const [width,setWidth]=useState(window.innerWidth)
  useEffect(()=>{
    const handleChange=()=>setWidth(window.innerWidth);
    window.addEventListener('resize',handleChange)
    return()=>{
      window.removeEventListener('resize',handleChange)
    }
  },[])
  return (
    <div>
      <p>your window size:{width}px</p>
    </div>
  )
}

export default WidthreSize 