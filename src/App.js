import React, { Component } from 'react';
import Contacts from './components/Contacts';
// import Provider from './Context';
import { Provider } from './Context';
import './App.css';


// wrap the application with Provider
function App() {
  return (
    <Provider>
      <div className="App container">
        <h1>Context API</h1>
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;