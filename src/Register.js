import React from 'react';
import './App.css';
class Register extends React.Component{
    constructor(props){
    super(props)
this.state={firstname:"",lastname:"",fathername:"",mothername:"",date:"",gender:"",email:"",password:"",phoneno:"",address:""}
this.handleChange=this.handleChange.bind(this)
this.handleSubmit=this.handleSubmit.bind(this)
}
handleSubmit(event){
 const{firstName,lastName,fatherName,motherName,date,gender,email,password,phoneno,address}=this.state
    event.preventDefault()
alert(`
firstName:${firstName}
lastname:${lastName}
fatherName:${fatherName}
motherName:${motherName}
date:${date}
gender:${gender}
email:${email}
password:${password}
phoneNo:${phoneno}
Address:${address}
`)}
handleChange(event){this.setState({[event.target.name]:event.target.value})
}
render()
{
return(
<div className="image">
<React.Fragment >
<h2><marquee style={{backgroundColor:'yellow',height:"40px",color:'black'}} behaviour="scroll" direction="right" scrollamount="10">New Admittions are opening</marquee></h2>
<h1 align="center">Student Registration</h1>
<table border="1" align="center" style={{backgroundColor:"white"}}>
<tr><th><label>FirstName:</label></th><td><input type="text" name="firstname" value={this.state.firstName} placeholder="FirstName" onChange={this.handleChange}/></td></tr>
<tr><th><label>LastName:</label></th><td><input type="text" name="lastname" value={this.state.lastName} placeholder="LastName" onChange={this.handleChange}/></td></tr>
<tr><th><label>FatherName:</label></th><td><input type="text" name="fathename" value={this.state.fatherName} placeholder="FatherName" onChange={this.handleChange}/></td></tr>
<tr><th><label>MotherName:</label></th><td><input type="text" name="mothername" value={this.state.motherName}placeholder="MotherName" onChange={this.handleChange}/></td></tr>
<tr><th><label>Date of Birth</label></th><td><input type="date" name="date" value={this.state.date} placeholder="Date of Birth"onChange={this.handleChange}/></td></tr>
<tr><th><label>Gender:</label></th><td>
<label>male</label><input type="radio" name="gn" value={this.state.male} onChange={this.male}/>
<label>female</label><input type="radio" name="gn" value={this.state.female} onChange={this.handleChange}/>
<label>others</label><input type="radio" name="gn" value={this.state.others} onChange={this.handleChange}/></td></tr>
<tr><th><label>Email:</label></th><td><input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></td></tr>  
<tr><th><label>Password:</label></th><td><input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></td></tr>
<tr><th><label>Address:</label></th><td><textarea type="text" name="address" value={this.state.address} onChange={this.handleChange}/></td></tr>
<br/>
<tr><td><input type="submit" value="Submit" onClick={this.handleSubmit}/></td></tr>
</table>
</React.Fragment>
    
</div>
    )
}
}
export default Register;