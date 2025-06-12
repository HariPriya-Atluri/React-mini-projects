
import React, { useState } from 'react'

const LoginLogout = () => {
  const [login,setLogin]=useState(true)
  const click=()=>setLogin(!login)
  return (
    <div>
      <button onClick={click} 
        style={{backgroundColor:login?'pink':'green',height:'50px',width:'90px'}}>
          {login?'login':'logout'}</button>
      <p>{login?'please Login':'welcome Haripriya !'}</p>
    </div>
  )
}

export default LoginLogout