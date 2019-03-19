import React, { Component } from 'react';
import Coin from './Coin';
// import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            isHead: true
        }
        this.flip = this.flip.bind(this);
    }

    flip(){
        if(Math.random() < 0.5){
            this.setState( st => ({ isHead: true, heads: st.heads + 1 }));
        } else {
            this.setState( st => ({ isHead: false, tails: st.tails + 1 }));
        }
    }

    render() {
        let totalCount =  this.state.heads + this.state.tails;
        return (
            <div className="Counter">
                <h3>Let's flip a coin!</h3>
                { totalCount ? <Coin isHead={ this.state.isHead } /> : null }
                <button onClick={ this.flip }>FLIP ME!</button>
                <p>Out of { totalCount } flips, there have been { this.state.heads } heads and { this.state.tails } tails.</p>
            </div>
        );
    }
}

export default Counter;
