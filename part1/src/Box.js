import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render() {
        const style = {
            // backgroundColor: this.props.color,
            backgroundColor: `rgb(${this.props.color[0]},${this.props.color[1]}, ${this.props.color[2]} )`,
        }
        return (
            <div className="Box" style={ style }>
                { this.props.text }
            </div>
        );
    }
}

export default Box;