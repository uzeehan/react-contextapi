import React, { Component } from 'react';
import './App.css';

// create a context object
const Context = React.createContext();

// create a provider CLASS component
class Provider extends Component {

  constructor() {
    super(); 
    this.state = {
      name: "John Doe",
      age: 100,
      city: 'Perth'
    }
  }

  // state = {
  //   name: "John Doe",
  //   age: 100,
  //   city: 'Perth'
  // }

  render () {
    return (
      <Context.Provider value={this.state}>
        { this.props.children }
      </Context.Provider>
    )
  }
}

// create a component to access data via Context Consumer
const Family = () => {
  return (
    <Context.Consumer>
      {(value) => (
        <p>Family: {value.name}        
          <Member />
        </p>
      )}
    </Context.Consumer>
  )
}

class Member extends Component {
  render() {
    return (
      <Context.Consumer>
        {
          (value) => (
            <p>Member: {value.age}</p>
          )
        }
      </Context.Consumer>
    )
  }
}


// wrap the application with Provider
function App() {
  return (
    <Provider>
      <div className="App container">
        <h1>Context API</h1>
        <Family />
      </div>
    </Provider>
  );
}

export default App;

