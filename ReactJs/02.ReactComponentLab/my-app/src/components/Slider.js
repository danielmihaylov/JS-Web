import React,{Component} from 'react';

import left from './../resources/left.png';
import right from './../resources/right.png';


class Slider extends Component{
    constructor(){
        super();

        this.state={
            focusedEpId:0,
            imgUrl:''
        }

        this.getNewEp = (id) => {
            fetch('http://localhost:9999/episodePreview/'+id).then(data => {
                return data.json()
            }).then(parsedData => {
                this.setState({focusedEpId:parsedData.id})
                this.setState({imgUrl:parsedData.url})
            })
        }
    }

    changeSlide = (direction) => {
        let id = Number(this.state.focusedEpId);
        if(direction === 'left'){
            id -= 1;
        }else if (direction === 'right'){
            id += 1;
        }
        this.getNewEp(id);
    }

    componentDidMount(){
        fetch('http://localhost:9999/episodePreview/'+this.state.focusedEpId).then(data => {
            return data.json()
        }).then(parsedData => {
            this.setState({imgUrl:parsedData.url})
        })
    }



    render(){
        return(
            <div className='warper'>
                <img className="slider-button case=left" onClick={() => this.changeSlide('left')} src={left} />
                <img className="sliderImg" src={this.state.imgUrl} />
                <img className="slider-button case=right" onClick={() => this.changeSlide('right')} src={right} />

                {/* <img onClick={() => {
                    this.getNewEp(Number(this.state.focusedEpId) - 1);
                }} className='slider-button case-left' alt='leftArrow' src={left}/>
                <img 
                className='sliderImg' 
                alt='focusedEp' 
                src={this.state.imgUrl}/>
                <img onClick={() => {
                    this.getNewEp(Number(this.state.focusedEpId) + 1);
                }} className='slider-button case-right' alt='rightArrow' src={right}/>
                 */}
            </div>
        )
    }
}


export default Slider;