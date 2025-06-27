import React, { useEffect, useState } from 'react'

const UserDetails = () => {
  const [user,setUser]=useState([])
  useEffect(()=>{
    const fetchingData=async function name() {
      try{
        const res=await fetch('https://jsonplaceholder.typicode.com/users/');
        const info=await res.json();
        setUser(info)
       
      }
      
      catch(error){
        console.log(error)
      }
    }
     fetchingData()
  },[])
  return (
    <div>
      <h2>User Details</h2>
      <ol>
      {
        user.map((users,index)=>{
          return <li key={index}><b>Name:</b>{users.name}<br></br>
          <b>Phone:</b>{users.phone}<br></br>
          <b>email:</b>{users.email}
         </li> 
          
        })
      }
      </ol>
    
    </div>
  )
}

export default UserDetails