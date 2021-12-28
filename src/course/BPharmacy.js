import React from 'react';
class BPharmacy extends React.Component{
    render(){
        return(
            <div>
                <h3  align="center" style={{color:'red'}}><u>Bacthelor of Pharmacy</u></h3>
                <h2 style={{backgroundColor:'orange',color:'blue'}}><marquee behaviour="scroll" direction="left" scrollamount="10">Courses in B.Pharmacy</marquee></h2>
                <table border="1" align="center" backgroundcolor="white">
<tr style={{color:'red'}}><th>S.No</th><th>Branch Code</th><th>Branch Name</th><th>Short Name</th><th>Course</th>	</tr>		
<tr><td>1</td><td>00</td><td>B.Pharmacy</td><td>B.Pharmacy</td><td>B.Pharmacy</td></tr>		
                </table>              
                
            </div>
        )
    }
}
export default BPharmacy;