import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    static defaultProps ={
        isHead: true,
    }

    render() {
        // let text;
        let imgUrl;
        if(this.props.isHead){
            imgUrl = 'http://americathebeautifulsilvercoins.com/wp-content/uploads/2010/03/America-the-Beautiful-Silver-Bullion-Coin-Obverse-325x324.jpg';
        }else {
            imgUrl = 'https://www.providentmetals.com/knowledge-center/images/Washington-quarter-bk.jpg';
        }
        return (
            <div className="Coin">
                <img src={imgUrl} alt="nope" />
            </div>
        );
    }
}

export default Coin;
