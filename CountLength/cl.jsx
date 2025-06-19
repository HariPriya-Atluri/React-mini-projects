import React, { useState } from 'react'

const Count = () => {
  const [char,setChar]=useState('')
  const typing=(event)=>{
    setChar(event.target.value)
    
  }

  return (
    <div>
      <input type="text" onChange={typing} value={char}/>
      <p>you typed {char.length} characters</p>
    </div>
  )
}

export default Count