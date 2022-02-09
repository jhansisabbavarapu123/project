import React, {Component} from 'react';
import './App.css';
class App extends Component{
  constructor(props){
    super(props);
    this.state={value:''};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this); 
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert('you have submitted the input successfully:' +this.state.value);
    event.preventDefault();
    document.getElementById("sp").innerHTML= '<br/> you have submitted the input successfully: '+this.state.value;
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Controlled Form Example</h1>
        <label>Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
        <span id="sp"></span>
      </form>
    );
  }
}
export default App;