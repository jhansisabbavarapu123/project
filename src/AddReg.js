import React,{ useState } from "react";
import Axios from 'axios';
import './App.css';
function AddReg(){
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [fathername,setFathername]=useState('')
    const [mothername,setMothername]=useState('')
    const [date,setDate]=useState('')
    const [gender,setGender]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phoneno,setPhoneno]=useState('')
    const [address,setAddress]=useState('')

    const addRegister=()=>{
      alert("adding")
      Axios.post("http://localhost:3001/insert",{firstname:firstname,lastname:lastname,fathername:fathername,mothername:mothername,date:date,gender:gender,email:email,password:password,phoneno:phoneno,address:address})
    }
      return(
          
    <div><h1 align="center"><u>Add Register Record</u></h1>
    <table border="1" align="center" style={{backgroundColor:"white",border:'solid'}}>
    <tr><label>FirstName</label><td><input type="text"  onChange={(event)=>{setFirstname(event.target.value)}}/></td></tr>
    <tr><label>LastName</label><td><input type="text"  onChange={(event)=>{setLastname(event.target.value)}} /></td></tr>
    <tr><label>FatherName</label><td><input type="text"  onChange={(event)=>{setFathername(event.target.value)}} /></td></tr>
    <tr><label>MotherName</label><td><input type="text"  onChange={(event)=>{setMothername(event.target.value)}}/></td></tr>
    <tr><label>Date of Birth</label><td><input type="date"  onChange={(event)=>{setDate(event.target.value)}} /></td></tr>
    <tr><label>Gender</label><td><input type="text"  onChange={(event)=>{setGender(event.target.value)}}/></td></tr>
    <tr><label>Email</label><td><input type="text"  onChange={(event)=>{setEmail(event.target.value)}} /></td></tr>
    <tr><label>Password</label><td><input type="password"  onChange={(event)=>{setPassword(event.target.value)}} /></td></tr>
    <tr><label>PhoneNo</label><td><input type="text"  onChange={(event)=>{setPhoneno(event.target.value)}} /></td></tr>
    <tr><label>Address</label><td><textArea  onChange={(event)=>{setAddress(event.target.value)}} /></td></tr>
    <tr><button onClick={addRegister}>Add Register</button></tr>
    </table>
    
    </div>
    );    
    }
    export default AddReg;