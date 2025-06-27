import React, { useState } from 'react'

const Theme = () => {
  const [toggle,setToggle]=useState(true)
  const click=()=>setToggle(!toggle)
  return (
    <div style={{
      backgroundColor:toggle?'white':'black',
      color:toggle?'black':'white',height:'100vh'}}>
      <button onClick={click} style={{
        backgroundColor:toggle?'black':'white',color:toggle?'white':'black',margin:'50px',height:'40px',width:'10%'}}>
          {toggle?'Dark Theme':'White Theme'}</button>
    </div>
  )
}

export default Theme