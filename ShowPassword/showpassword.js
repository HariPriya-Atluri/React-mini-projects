import React, { useState } from 'react'

const Password = () => {
  const [pw,setpw]=useState(false)

  const click=()=>setpw(!pw)
 
  return (
    <div>
      <input type={pw?'text':'password'}/>
      <button onClick={click}>{pw?'🙈 Hide' : '👁️ Show'}</button>
    </div>
  )
}

export default Password