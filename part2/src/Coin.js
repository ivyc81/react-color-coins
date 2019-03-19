import React, { Component } from 'react';
// import './Coin.css';

class Coin extends Component {
    render() {
        let text;
        if(this.props.isHead){
            text = "Head";
        }else {
            text = "Tails";
        }
        return (
            <div className="Coin">
                <b>{ text }</b>
            </div>
        );
    }
}

export default Coin;
