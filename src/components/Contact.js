import React, { Component } from 'react';
import { Consumer } from '../Context';

export class Contact extends Component {
    render() {
        return (
            // declare CONTEXT CONSUMER
            <Consumer>
                {
                    (value) => (
                        <div>
                            <h3>CONTACT INFO</h3>
                            Name: {value.name} <br/>
                            Age: {value.age} <br/>
                            Email: {value.email}
                        </div>
                    )
                }
            </Consumer>
        )
    }
}

export default Contact;
