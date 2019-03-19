import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render() {
        const style = {
            backgroundColor: this.props.color,
        }
        return (
            <div className="Box" style={ style }>
            </div>
        );
    }
}

export default Box;