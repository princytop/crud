import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'


const Userdetails = () => {
  const [ userdata , setUserdata]=useState('');
 const {idd}= useParams()

  useEffect(()=>[
    fetch("http://localhost:5050/userdata/" + idd).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
        setUserdata(resp)
      })
    })
  ],[])
  console.log(userdata);
  return (
    <>
      <h1>Userdetails</h1>
 
 {
  userdata &&
    <>
      <h1>{userdata.id}</h1>
      <h1>{userdata.username}</h1>
      <h1>{userdata.password}</h1>
    </>
  
 }

    </>
  )
}

export default Userdetails
