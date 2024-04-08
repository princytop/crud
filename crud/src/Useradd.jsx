import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  import {useNavigate} from 'react-router';

const Useradd = () => {
 const [username , setUsername]=useState("");
 const [password , setPassword]=useState("");
 const [id , setId]=useState("");
 const data={username , password ,id }
 const navigate =useNavigate("")




   function savedata(e) {
    e.preventDefault()
    fetch("http://localhost:5050/userdata" ,{
        method:"POST",
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
      <h1>Useradd</h1>



      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' value={id}  onChange={(e)=>{setId(e.target.value)}} label='id' id='form1'  disabled type='id'/>

      <MDBInput wrapperClass='mb-4' value={username}  onChange={(e)=>{setUsername(e.target.value)}} label='username' id='form1' type='username'/>


      <MDBInput wrapperClass='mb-4' value={password}  onChange={(e)=>{setPassword(e.target.value)}}  label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" onClick={savedata}>user addd</MDBBtn>

      

    </MDBContainer>
    </>
  )
}

export default Useradd
