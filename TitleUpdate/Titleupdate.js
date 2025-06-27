import React, { useEffect, useState } from 'react'

const TitleUpdate = () => {
  const [title,setTitle]=useState('')
  const update=(event)=>{
    setTitle(event.target.value)
  }
  useEffect(()=>{
    document.title=title
  },[title])
  return (
    <div>
      <input type="search" onChange={update} />
      <p>you typed:{title} </p>
    </div>
  )
}

export default TitleUpdate