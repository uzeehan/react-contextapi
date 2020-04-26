import React, { Component } from 'react';

// create a CONTEXT object
const Context = React.createContext();

// create a CONTEXT PROVIDER
export class Provider extends Component {

    state = {
        name: 'Jenny Doe',
        age: 100,
        email: 'jenny@mail.com'
    }
    render () {
        return (
            <Context.Provider value={ this.state }>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer; 

// export const Consumer = Context.Consumer;
// export default Provider;