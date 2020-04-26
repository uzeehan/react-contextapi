import React, { Component } from 'react';
import Contact from './Contact';

export class Contacts extends Component {

    render() {
        return (
            <div>
                <Contact name="this.state.name" />
            </div>
        )
    }
}

export default Contacts;
