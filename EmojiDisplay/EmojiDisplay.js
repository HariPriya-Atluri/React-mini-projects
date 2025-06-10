import React, { useState } from 'react'
import './new.css'

const EmojiDisplay = () => {
 const emojis = ['😁', '😂', '😢', '😡', '😍', '😴'];

  const [emoji,setEmoji]=useState()
  
  return (
    <div>
      {
        emojis.map((emoji)=><button onClick={()=>setEmoji(emoji)}>{emoji}</button>)
      }
      <h1>your mood is:</h1>
    <p>{emoji}</p>
    </div>
  )
}

export default EmojiDisplay