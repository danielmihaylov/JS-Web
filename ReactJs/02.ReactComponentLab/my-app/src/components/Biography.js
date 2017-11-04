import React, { Component } from 'react';
import Char from './Char';
import observer from '../utils/observer';


class Biography extends Component {
    constructor(props) {
        super(prompt);


        this.state = {
            id: 0,
            char: {}
        }
    }

    componentDidMount() {
        observer.addObserver('viewBiography', this.viewBiography);
    }

    viewBiography = ({ id }) => {
        this.setState({ id: id });
        this.getChar({ id });
    }

    getChar = ({ id }) => {
        fetch('http://localhost:9999/character/' + id).then(response => {
            response.json().then(responseJson => {
                this.setState({
                    char: responseJson
                });
            })
        })
    }

    render() {
        let html;
        if (Object.keys(this.state.char).length !== 0) {
            html = (
                <fieldset>
                    {Char({ url: this.state.char.url })}
                    {this.state.char.name}
                    <div>
                        {this.state.char.bio}
                    </div>
                </fieldset>
            )
        };
        return (
            <div>
                {html}
            </div>
        )
    }
}

export default Biography;
