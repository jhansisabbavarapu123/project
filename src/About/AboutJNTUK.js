import React from 'react';
import logo1 from './jntulo.jpg'
import logo3 from './kim.jpg'
import logo2 from './jawaharlal.jpg'
class Aboutcollege extends React.Component{
    render(){
        return(
            <div>
                <title>JNTUK university</title>
            <img align="left" src={logo1} width="200" height="150"/><img  align="right" src={logo2} width="200" height="150"/>
            <h1 align="center" style={{color:'blue'}}>Jawaharlal Nehru Technological University,Kakinada</h1>
            <h3 align="center" style={{color:'brown'}}>Kakinada-533003,Andhra Pradesh,India</h3>
            <h4 align="center" style={{color:'red'}}><u>Effective People Effective Culture</u></h4><hr/>
            <h2 style={{backgroundColor:'green',height:"40px",color:'white'}}><marquee behavior="alternate" direction="left">Welcome to JNTUK University</marquee></h2>
            <img  align="right" src={logo3} width="550" height="450"/><br/>
            <h2 align="left">Aboutcollege</h2>
            <p align="left" style={{color:'black'}}> JNTU (Jawaharlal Nehru Technological University) was originally 
                "The College of Engineering, Viza,gpatnam" at the time of its establishment in 1946. 
                It is now a sprawling campus of 110 acres, green with mango trees in the fast developing Port city of Kakinada,
                 East coast of peninsula India. Kakinada has a rich political literacy and cultural heritage passed on through generations
                  This college became a constituent of the Jawaharlal Nehru Technological University w.e.f 02-10-1972 through an act of legislature along with other sister institutions under the control of the then Director of Technical Education, Government of Andhra Pradesh. Earlier, it was affiliated to Andhra University. In the year 2003 the college has become autonomousJawaharlal nehru tchnological university kakinada is a
                public university,in kakinada east godhavari didtrict,south of the indian state
                of andhra pradesh.it is one of an indias universities focusing on engineering.it
                was estrablished in 1946.vice chancellor is sri sathish chandra,university type is
                autonomous.Jawaharlal nehru technological university kakinada was initially incepted
                with the name "The College of engineering vizagapatnam"in 1946.The university grew
                out of that college.Spread over a sprawling campus of 110 acres in port city of
                kakinada,the college became a constitute unit of jntu hyderabad in 1972.subject
                to the bifurcation of jntuk it was notified ads jntuk by the act of legislature
                in 2008 as separate university.jntuk has two constituent colleges under its fold:
                university college of engineering kakinada and university college of engineering vijaya
                nagaram .The university has nearly 268 affiliated colleges under the jurisdiction
                of 8 districts.
                </p>
                
            </div>
        )
    }
}
export default Aboutcollege;