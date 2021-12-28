import React from 'react';
class PharmD extends React.Component{
    render(){
        return(
            <div>
                <h3 align="center"style={{color:'red'}}><u> PharmD</u></h3>
                <h3 style={{backgroundColor:'green',height:"30px",color:'red'}}><marquee behaviour="scroll" direction="left" scrollamount="10">Courses in PharmD</marquee></h3>
                <table border="1" align="center" backgroundcolor="white">
<tr style={{color:'red'}}><th>S.No</th><th>Branch Code</th><th>Branch Name</th><th>Short Name</th>	<th>Course</th>	</tr>		
<tr><td>1</td><td>00</td><td>PharmD</td><td>PharmD</td><td>PharmD</td></tr>		
                </table>
                
            </div>
        )
    }
}
export default PharmD;