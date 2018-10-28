import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div>
         <div className="header">
          Phone Directory
      </div>
        <button> Add </button>
        <div>
          <span> Name </span>
          <br></br>
          <span> Phone </span>
        </div> 
        <label htmlfor="name"> Name </label>
        <input id="name" type="text" placeholder="Type Here" defaultValue="Manan"/>
      </div>
    );
  }
}

export default App;
