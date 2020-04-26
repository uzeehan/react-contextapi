import React, { Component } from 'react';
import Contacts from './components/Contacts';

// createContext object
const MyContext = React.createContext();

export class Context extends Component {

    state = {
        name: 'John Doe',
        age: 100,
        location: 'Sydney' 
    }


    render() {
        return (
            <MyContext.Provider value="I'm a Context Provider">
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default Context;

