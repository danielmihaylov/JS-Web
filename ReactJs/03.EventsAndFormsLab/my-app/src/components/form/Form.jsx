import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = { name: '',password:'',bio:'',make: 'volvo' };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
       event.preventDefault();
       alert(this.state.value);
       
    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form  onSubmit={this.onSubmit}>
                Name:
                <input 
                    onChange={this.onChange} 
                    name="name"
                    type="text" 
                    value={this.state.name} /><br/>
                Password:
                <input
                    onChange={this.onChange} 
                    name="password"
                    type="password" 
                    value={this.state.password}/><br/>
                Bio:    
                <textarea 
                    onChange={this.onChange} 
                    name="bio"
                    value={this.state.bio}/><br/>
                <input type="submit" value="Submit"/><br/>
                <select
                    onChange={this.onChange}
                    name="make"
                    value={this.state.make}>
                    <option value="volvo">Volvo</option>
                    <option value="audi">Audi</option>
                    <option value="Mercedes">Mercedes</option>
                </select>
            </form>
        )
    }
}