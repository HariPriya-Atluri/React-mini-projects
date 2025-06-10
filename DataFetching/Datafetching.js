import React, {  useState } from 'react'

const DataFetching = () => {
  const [user,setUser]=useState(null)
  const NewUser=()=>{
    const UserData= async function() {
      try{
        const randomuser=Math.floor(Math.random()*10)+1;
        const res=await fetch(`https://jsonplaceholder.typicode.com/users/${randomuser}`);
        const info=await res.json();
        setUser(info);
      }
      catch(error){
        console.log(error)
      }
      
    }
    UserData()
   
  }
  
  return (
    <div>
      <button onClick={NewUser}>New User</button>
      <h2>User Data</h2>
      {user && 
     <div>
      <p>Name:{user.name}</p>
      <p>Phone:{user.phone}</p>
      <p>Email:{user.email}</p></div>
      }
    </div>
  )
}
export default DataFetching