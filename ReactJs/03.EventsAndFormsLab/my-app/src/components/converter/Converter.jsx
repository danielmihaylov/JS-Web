import React, { Component } from 'react';
import './Converter.css';
import CurrencyDisplay from './CurrencyDisplay';

const conversionTable = {
    eur: 1,
    usd: 1.16
}

function convert(value, from, to) {
    return value / conversionTable[from] * conversionTable[to];
}


export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = { eur: 0, usd: 0 };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        let value = Number(event.target.value);
        if (event.target.value === '') {
            return;
        }

        this.setState({
            eur: convert(value, event.target.name, 'eur'),
            usd: convert(value, event.target.name, 'usd')
        });
    }

    onSubmit(event) {
        event.preventDefault();
    }


    render() {
        return (
            <div className="converter">
                <form onSubmit={this.onSubmit}>
                    <CurrencyDisplay
                        onChange={this.onChange}
                        value={this.state.eur}
                        name="eur" />
                    <CurrencyDisplay
                        onChange={this.onChange}
                        value={this.state.usd}
                        name="usd" />
                </form>
            </div>
        )
    }
}