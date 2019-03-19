import React, { Component } from 'react';
import Box from './Box';

class Table extends Component {
    static allColors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    constructor(props){
        super(props);
        this.state = {
            colorArr: this.randomColors(),
        };
        this.handleClick = this.handleClick.bind(this);
    }

    randomChoice(arr){
        return Math.floor(Math.random()*arr.length);
    }

    randomColors(){
        const colorArr = [];
        for(let i = 0; i < this.props.numBox; i++){
            let color = Table.allColors[this.randomChoice(Table.allColors)];
            colorArr.push(color);
        }
        return colorArr;
    }

    handleClick(evt){
        const index = this.randomChoice(this.state.colorArr);

        const newColor = Table.allColors[this.randomChoice(Table.allColors)];

        const newState = this.state.colorArr.map( (ele, idx) => {
            return idx === index ? newColor : ele;
        })

        this.setState({colorArr: newState});
    }

    render() {
        return (
            <div className="Table">
                {this.state.colorArr.map(b =>
                 <Box color={b} />)}
                 <button onClick={ this.handleClick }>Change</button>
            </div>
        );
    }
}

export default Table;