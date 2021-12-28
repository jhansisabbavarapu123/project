import React from 'react';
import './App.css';
import AboutJNTUK from './About/AboutJNTUK';
import Coursesoffered from './course/Coursesoffered';
import Register from './Register';
import AddReg from './AddReg';
import FindReg from './FindReg';
import DelReg from './DelReg';
import UpdReg from './UpdReg';
import {BrowserRouter as Router,Route,Link}from 'react-router-dom';
function App(){
  return(
    <React.Fragment>
      <Router>
        
        <div className="App">
          <h1 style={{textAlign:'center',fontFamily:'Seref',color:'blue'}}>JNTU Kakinada University</h1>
              <button><Link to="/AboutJNTUK">AboutJNTUK</Link></button> 
              <button><Link to="/Coursesoffered">Courses</Link></button>
              <button><Link to="/Register">Registration</Link></button>
              <button><Link to="/AddReg">AddRegister</Link></button>
              <button><Link to="./FindReg">FindRegister</Link></button>
              <button><Link to="./DelReg">DeleteRegister</Link></button>
              <button><Link to="./UpdReg">UpdateRegister</Link></button>
              <Route path="/AboutJNTUK" component={AboutJNTUK}/>
              <Route path="/Coursesoffered" component={Coursesoffered}/>
              <Route path="/Register" component={Register}/>
              <Route path="/AddReg" component={AddReg}/>
              <Route path="/Findreg" component={FindReg}/>
              <Route path="/DelReg" component={DelReg}/>
              <Route path="/UpdReg" component={UpdReg}/>
              </div>
        
      </Router>
    </React.Fragment>
  )
}
export default App;

