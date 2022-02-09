import React, { Component } from 'react';  
import Hoc from './HOC';  
function add(p,t,r){ return p*t*r/100;}
function highrorder(p,t,addReference){
  return addReference(p,t,5);
}
class App extends Component {  
 
  render() {  
    return (  
      <div>  
        <h2>HOC Example</h2>  
        HOC Implementation
        <br/>{highrorder(40000,4,add)}
      </div>  
    )  
  }  
}  
App = Hoc(App);  
export default App;
