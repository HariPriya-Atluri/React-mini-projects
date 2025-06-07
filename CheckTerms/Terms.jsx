import React, { useState } from 'react'
const Terms = () => {
  const [terms,setTerms]=useState(false)
  const click=()=>setTerms(!terms)
  return (
    <div>
      <input type="checkbox" onChange={click} />
     {terms && <h2>Thank you</h2>}
    </div>
  )
}

export default Terms