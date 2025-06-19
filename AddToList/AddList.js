
import React, { useState } from 'react'

const Lists = () => {
  const [input,setInput]=useState('')
  const [items,setItems]=useState([])
  const texts=(event)=>setInput(event.target.value);
  const click=()=>{
      if(input !== '')
        setItems([...items,input]);
        setInput('');
  }

  return (
    <div>
      <input type="text" placeholder='enter any text' onChange={texts} value={input}/>
      <button onClick={click}>Add</button>
      <ul>
        {
          items.map((item,index)=><li key={index}>{item}</li>)
        }
      </ul>
    </div>
  )
}

export default Lists