import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';

class WarningSign extends Component {
    render() {
        return (
            <Alert variant={'danger'}>
                {this.props.text}
            </Alert>
        );
    }
}

export default WarningSign;



/*
Create a component WarningSign which receives as a property a text. This text should be presented inside an.
Alert of type danger
*/