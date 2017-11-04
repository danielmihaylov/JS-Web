import React,{Component} from 'react';

import Char from './Char';

class View extends Component {
    constructor(){
        super();

        this.state = {
            id:0,
            currentChar:{
                url:''
            }
        }
    }

    componentDidMount(){
        fetch('http://localhost:9999/character/'+this.state.id).then(data=>{
            return data.json();
        }).then(parsedData=>{
            this.setState({currentChar:parsedData})
        })
    }

    render(){
        return(
            <div>
                <fieldset>
                    <Char params={({url:this.state.currentChar.url})}/>
                    <p>{this.state.currentChar.bio}</p>
                </fieldset>
            </div>
        )
    }
}

export default View;