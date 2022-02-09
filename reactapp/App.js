import React,{Component} from 'react';
import './App.css';
class App extends Component{
  constructor(props){
    super(props);
    this.state={ message:prompt("Enter message","my message"),mobile:'1234567890'}
   
  }  
  render(){
    return(<div>
      Welcome to {this.props.name}<br/>
      Available in {this.props.location}<br/>
      Training in{this.props.job}
      <TestMe/>
     <br/>
      <MessageSender message={this.state.message} mobile={this.state.mobile}></MessageSender>
    </div> );
  }
}
App.defaultProps = {  
  name: "Jhansi" ,
  location:"India",
  job:"software"
}  
class TestMe extends Component{
  render(){
    return(<font face='calibre' color="pink" size='20'>Welcome to Application development</font>);
  }
}
class MessageSender extends Component{
  render(){
    return(<div>
  
      <hr/>
      <font color='blue'>{this.props.message}</font>
           <h3>{this.props.mobile}</h3></div>);
  }
}
export default App;
