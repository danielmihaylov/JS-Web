import React, { Component } from 'react';
import Char from './Char';
import observer from '../utils/observer';
import Biography from './Biography';

class Rooster extends Component {
    constructor() {
        super()

        this.state = {
            charArray: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster').then(data => {
            return data.json()
        }).then(parsedData => {
            this.setState({ charArray:parsedData })
        })
    }

    render() {
        return (
            <div>
                {this.state.charArray.map((x,index) => {
                    return <Char key={index} params={x}/>
                })}
                <Biography/>
            </div>
        )
    }
}

export default Rooster;