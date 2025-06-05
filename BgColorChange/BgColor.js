import React, { useState } from 'react'
const Bgcolor = () => {
  const [color,setColor]=useState('')

const red=()=>setColor('red');
const blue=()=>setColor('blue');
const green=()=>setColor('green');
  return (
    <div style={{backgroundColor:color, height:'100vh'}}>
      <button onClick={red}>red</button>
      <button onClick={green}>green</button>
      <button onClick={blue}>blue</button>
    </div>
  )
}

export default Bgcolor