import React,{useState} from "react"
import Axios from 'axios';
import './App.css';
function DelReg(){
    const[firstname,setFirstname]=useState('')
    const[lastname,setLastname]=useState('')
    const[fathername,setFathername]=useState('')
    const[mothername,setMothername]=useState('')
    const[date,setDate]=useState('')
    const[gender,setGender]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[phoneno,setPhoneno]=useState('')
    const[address,setAddress]=useState('')
const delRegister=()=>{
    alert("delecting Record");
    Axios.post("http://localhost:3001/delRec",{firstname:firstname,lastname:lastname,fathername:fathername,mothername:mothername,date:date,gender:gender,email:email,password:password,phoneno:phoneno,address:address})
}
return(
    <div><h1 align="center">Delete Register</h1>
    <table border="1" align="center" style={{backgroundColor:"white",border:'solid'}}>
    <tr><th><label>FirstName</label></th><td><input type="text" onChange={(event)=>{setFirstname(event.target.value)}}/></td></tr>
    <tr><th><label>LastName</label></th><td><input type="text" onChange={(event)=>{setLastname(event.target.value)}}/></td></tr>
    <tr><th><label>FatherName</label></th><td><input type="text" onChange={(event)=>{setFathername(event.target.value)}}/></td></tr>
    <tr><th><label>MotherName</label></th><td><input type="text" onChange={(event)=>{setMothername(event.target.value)}}/></td></tr>
    <tr><th><label>Date of Birth</label></th><td><input type="date" onChange={(event)=>{setDate(event.target.value)}}/></td></tr>
    <tr><th><label>Gender</label></th><td><input type="text" onChange={(event)=>{setGender(event.target.value)}}/></td></tr>
    <tr><th><label>Email</label></th><td><input type="text" onChange={(event)=>{setEmail(event.target.value)}}/></td></tr>
    <tr><th><label>Password</label></th><td><input type="password" onChange={(event)=>{setPassword(event.target.value)}}/></td></tr>
    <tr><th><label>Phoneno</label></th><td><input type="text" onChange={(event)=>{setPhoneno(event.target.value)}}/></td></tr>
    <tr><th><label>Address</label></th><td><input type="text" onChange={(event)=>{setAddress(event.target.value)}}/></td></tr>
    <button onClick={delRegister}>Delete Register</button>
    </table>
    </div>
);
}
export default DelReg;