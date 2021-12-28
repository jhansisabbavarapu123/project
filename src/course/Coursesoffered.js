import React from 'react';
import BTech from './BTech';
import BPharmacy from './BPharmacy';
import PharmD from './PharmD';
import MTech from './MTech';
import {BrowserRouter as Router,Route,Link}from 'react-router-dom';
class Coursesoffered extends React.Component{
    render(){
        return(
            <Router>
                <React.Fragment >   
            <div>
            <h1 align="center" style={{color:'green',fontFamily:'seref'}}>Courses Offered</h1><hr/>
            <h2><marquee style={{backgroundColor:'yellow',height:"40px",color:'black'}} behaviour="scroll" direction="right" scrollamount="10">Courses Offered here!!!</marquee></h2><hr/>
            <button><Link to="/BTech">B.Tech</Link></button> 
            <button><Link to="/BPharmacy">B.Pharmacy</Link></button>
            <button><Link to="/PharmD">PharmD</Link></button> 
            <button><Link to="/MTech">M.Tech</Link></button> 
            <Route path="/BTech" component={BTech}/>
            <Route path="/BPharmacy" component={BPharmacy}/>
            <Route path="/PharmD" component={PharmD}/>
            <Route path="/MTech" component={MTech}/>
              
        
            </div>
            </React.Fragment>
            </Router>
        )
    }
}
export default Coursesoffered;