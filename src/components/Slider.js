import React, { Component } from 'react';

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import sliderDatas from '../api/sliderResort.json';

class Slider extends Component{

    constructor(props){
        super(props);

        this.state = {

            currentIndex : 0,
            lengthArray : sliderDatas.slider.length
        }

        this.clickNextHandler = this.clickNextHandler.bind(this);
        this.clickPrevtHandler = this.clickPrevtHandler.bind(this);
    }


    clickNextHandler(){

        let index = this.state.currentIndex;
        let length = this.state.lengthArray;


        if( index === length -1) {

            index = 0;

        } else {

            index ++;
        }

        return this.setState({currentIndex: index});
        
    }

    clickPrevtHandler(){

        let index = this.state.currentIndex;
        let length = this.state.lengthArray;

        if (index < 1) {

            index = length - 1;

        } else {

            index--;
        }

        return this.setState({ currentIndex: index });
    }

    

    render(){

        const leftArrowIcon = <FontAwesomeIcon icon={faChevronLeft} />
        const rightArrowIcon = <FontAwesomeIcon icon={faChevronRight}/>
        const getSlideDatas = sliderDatas.slider;

        let currentIndex = this.state.currentIndex;

        const slide = getSlideDatas.map((slide, index) => {
            return (
                <div className={`slider-item ${index === currentIndex ? 'active' : 'disable'}`} key={index}>
                    <img src={require(`../assets/${slide.img_url}`)} alt={`"${slide.label}"`}/>
                    <a href="/" className="redirect-label">
                        <div className="slider-caption">
                            <h4>{slide.label} -  <span>{slide.country}</span></h4>
                            <p>{slide.place}</p>
                            <p>{slide.upto}</p>
                        </div>
                    </a>
                </div>
            )
        });

        return(
            <div className="slider-container">
                <div className="slider-inner" id="slide" >
                {slide}       
                <div className="slider-control">
                    <div className="slider-control-left" href="#" data-slide="left" onClick={this.clickPrevtHandler}>{leftArrowIcon}</div>
                    <div className="slider-control-right" href="#" data-slide="right" onClick={this.clickNextHandler}>{rightArrowIcon}</div>
                </div>
            </div>
        </div>
        )
    }

}


export default Slider;