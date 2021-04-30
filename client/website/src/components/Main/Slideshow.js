/*
    Special Feature: Slideshow
    Make this into a reusable component that takes in props (list of slides)!
    Home, EPubs, and Conferences should have custom Slide components that they feed into this slideshow
    Fade effect, pause on hover, auto-play, delay 3000 per slide, change color of location indicators 
*/
import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import LeftArrow from '../../media/leftarrow.svg';
import RightArrow from '../../media/rightarrow.svg';
import "../../css/Slideshow.css";

const renderPrevArrow = (e) => {
    console.log(e);
    return (
        <div>
            <img className="Slideshow_arrow" src={LeftArrow} alt="left arrow"/>
        </div>
    )
}
const renderNextArrow = (e) => {
    console.log(e);
    return (
        <div>
            <img className="Slideshow_arrow" src={RightArrow} alt="right arrow"/>
        </div>
    )
}
const Slideshow = (props) => {
    return(
        <span className="carousel">
        <Fade 
            // transitionTime={3000}
            autoPlay={true}
            duration={3000}
            transitionDuration={500}
            prevArrow={<div style={{width: "50px", marginRight: "-50px"}}><img className="Slideshow_arrowleft" src={LeftArrow} alt="left arrow"/></div>}
            nextArrow={<div style={{width: "50px", marginLeft: "-100px"}}><img className="Slideshow_arrowright" src={RightArrow} alt="right arrow"/></div>}

            indicators={true}
        >
            {props.children}
        </Fade>
        </span>
    );
};
export default Slideshow;