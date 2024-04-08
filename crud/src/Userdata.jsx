import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {useNavigate} from 'react-router';
// import { useNavigate } from 'react-router';
import {useParams} from 'react-router-dom'


const Userdata = () => {
    const[ userdata, setUserdata]=useState([])
    // const data={ username , password , id}
    const navigate =useNavigate("")
    const {idd}= useParams()
    
    useEffect(()=>{
     fetch("http://localhost:5050/userdata").then((result)=>{
        result.json().then((resp)=>{
            console.log(resp);
            setUserdata(resp)
            
        })
     })
    })
    console.log(userdata);
    
    function useredit(id) {
        navigate("/Useredit/"+ id)
    }

    function useradd() {
        navigate("/Useradd")
    }
    
    function userdateail(id) {
      navigate("/Userdetails/"+id)
    }

    function userdelete() {
      if (window.confirm("are you sure")) {
        fetch("http://localhost:5050/userdata/"+idd,{
          method:"DELETE"
          }).then((resp)=>{
            alert("data was removed >>>>>>>")
            window.location.reload();
          }).catch((err)=>{
            console.log(err);
          })
      } 
    }
  return (
    <>
      <h1>Userdata</h1>

      <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>username</th>
          <th scope='col'>password</th>
          <th scope='col'>id</th>
          <th scope='col'>action</th>
        </tr>
        <tr>
          <th><button onClick={useradd}>useradd</button></th>    
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       {
        userdata.map((val)=>
        <>
          <tr>
            <td>{val.username}</td>
            <td>{val.password}</td>
            <td>{val.id}</td>
            <td>
            <button onClick={()=>{useredit(val.id)}}>edit</button> 
            <button onClick={()=>{userdelete(val.id)}}>delete</button> 
            <button onClick={()=>{userdateail(val.id)}}>detail</button></td> 
           
          </tr>
          
          
         
        </>
    )
       }
       

      </MDBTableBody>
    </MDBTable>
    </>
  )
}

export default Userdata
