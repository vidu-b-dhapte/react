import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:"current state"
    }
  }
  update(e){
    this.setState({name:e.target.value})
  }
  render() {
    let name=this.props.name
    return (
    
      <div>
     <h1>Stateful</h1>
     <h2>hi</h2>
     
     <h1>
       {this.props.name}
     </h1>
     <h1>
       {name}
     </h1>
     <input type="text" onChange={this.update.bind(this)}/>
     <h1>{this.state.name}</h1>
     </div>
    );
    
  }
}
// App.prototypes={
//   name:React.prototypes.string,
//   cat:React.prototypes.number.isrequired
// }
// App.defaultprops={
//   name:"default props"
// }


//const App=()=><h1>stateless</h1>

export default App;
