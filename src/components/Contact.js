import React, { Component } from 'react'

export class Contact extends Component {

    render() {
        return (
            <div>
                <h3>
                    The contact name is : {this.props.name}
                </h3>
            </div>
        )
    }
}

export default Contact;
