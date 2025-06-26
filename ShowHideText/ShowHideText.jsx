import React, { useState } from 'react'

const ShowandHide = () => {
  const [text,setText]=useState(true)
  const click=()=>setText(!text)
  return (
    <div>
      <button onClick={click}>{text?'hide':'show'}</button>
      {/* true && 'Hello welcome back' ➜ 'Hello welcome back'
       Use this pattern when:
The condition is boolean (true/false).

You want to show something or show nothing. */}
      <h1>{text && 'Hello welcome back'}</h1>

    </div>
  )
}
export default ShowandHide