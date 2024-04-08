import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Useredit = () => {
    // const [userdata , setUserdata]=useState("")
    const [username , setUsername]=useState("");
 const [password , setPassword]=useState("");
 const [id , setId]=useState("");
 const {idd} =useParams()
 const data={username , password ,id }
 const navigate= useNavigate("")



  useEffect(()=>{
    fetch("http://localhost:5050/userdata/" +idd).then((result)=>{
        result.json().then((resp)=>{
            console.log(resp);
            setId(resp.id)
            setUsername(resp.username)
            setPassword(resp.password)
        })
    })
  },[])



 function savedata(e) {
    e.preventDefault()
    fetch("http://localhost:5050/userdata/" +idd ,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((result)=>{
      result.json().then((resp)=>{
          console.log(resp);
           navigate("/") 
      })
      })
   }


  return (
    <>
       <h1>Useredit</h1>


       
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput wrapperClass='mb-4' label='id' id='form1' type='id'  value={id} onChange={(e)=>{setId(e.target.value)}}/>

<MDBInput wrapperClass='mb-4' label='Username' id='form1' type='name' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>

<MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

<div className="d-flex justify-content-between mx-3 mb-4">
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
  <a href="!#">Forgot password?</a>
</div>

<MDBBtn className="mb-4" onClick={savedata} >user addd</MDBBtn>

   

</MDBContainer>
    </>
  )
}

export default Useredit
