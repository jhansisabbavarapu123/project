import React from 'react';
class Register extends Component {           
render(){
return(
<form>​​​​
<div>
<label >FirstName</label>
<input type="text" name='firstname' placeholder='FirstName'/> 
</div>
<div>
<label >LastName</label>
<input  type="text" name='lastname' placeholder='LastName' /> 
</div>
<div>
<label >Father Name</label>
<input type="text" name='fathername' placeholder='FatherName' /> 
</div>
<div>
<label >MotherName</label>
<input  type="text" name='Mothername' placeholder='MotherName'/> 
</div>
<div>   
<label >Date of birth</label>
<input name='date' placeholder='Date of birth' />
</div>
<div>   
<label >Gender</label>
<lable>male</lable>
<input type="radio" name="gn"/>male<br/>
<lable>female</lable>
<input type="radio" name="gn"/>female<br/>
</div> 
<div>
<label>Email</label>
<input  type="email" name='email' placeholder='Email'/>​​​​​
</div>
<div> 
<label >Address</label>
<input  type="text" name='address' placeholder='Address'/>
</div> 
<div>
<label>Phone Number</label>
<input name='phoneNo' placeholder='Phone No'/> 
</div>
<label>Education</label>
<select type="text" name="education">
    <option>10Th</option>
    <option>Intemediate</option>
    <option>Graduction</option>
    <option>Postgraduation</option>
</select>
<div><button>Register here</button></div>
</form>
)
}                
}
export default Register;

