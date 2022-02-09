import React,{Component} from 'react';
import './App.css';
class App extends Component {
  constructor(props){  // constructor will support for one time load of the class
   super(props);    // initialize Component class properties here
   this.state = {address:'what is your address',doornumber:"153 0-132",street:"Kondapalem",city:"Garividi",pincode:"535101",District:"Vizianagaram"};  
   }  
   render() {  
           return (  
               <div>  
                   welcome to {this.props.name}<br/>
                   <TestMe/>
                   {this.state.address}<br/>
                   <h2>Address:</h2>
                   <AddressSender doornumber={this.state.doornumber} street={this.state.street} city={this.state.city} pincode={this.state.pincode} District={this.state.District}></AddressSender>
               <table>
                 <tr>
                   <td>DoorNo</td>
                   <td>{this.state.doornumber}</td>
                </tr>
                <tr>
                  <td>street</td>
                  <td>{this.state.street}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{this.state.city}</td>
                </tr>
                <tr>
                  <td>District</td>
                  <td>{this.state.District}</td>
                  </tr>
                <tr>
                  <td>Pincode</td>
                  <td>{this.state.pincode}</td>
                </tr>
               </table>
               </div>);  
 }
 }
 App.defaultProps={
     name:"Jhansi"
 }
 class TestMe extends Component{
     render(){
         return(<div><font face='Calibre' color='blue' size='20' >Hello All</font></div>);
     }
 }
 class AddressSender extends Component{
     render(){
         return(<div><font color='red'>
           {this.props.doornumber}
           {this.props.street}
           {this.props.city}
           {this.props.District}
           {this.props.pincode}</font></div>);
     }
 }
export default App;