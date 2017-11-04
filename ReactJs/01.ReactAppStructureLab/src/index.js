import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.data = 5;

class Clock extends React.Component {

    constructor(props){
        super(props);

        this.state = {time: (new Date()).toLocaleTimeString()};
        setInterval(this.tick.bind(this),1000);
    }

    tick(){
        this.setState({time: (new Date()).toLocaleTimeString()});
    }

    render(){
        return (<p>It is {this.state.time} o`clock </p>);
    }
}

const myElement = (
    <div>
        <h1>Hello world</h1>
        <Clock/>
        <p>Value stored in memory: {window.data}</p>
    </div>
);

ReactDOM.render(myElement, document.getElementById('root'));
registerServiceWorker();
