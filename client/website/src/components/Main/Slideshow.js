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
import Dot from '../../media/dot.svg';

import "../../css/Slideshow.css";

const Slideshow = (props) => {
    return(
        <Fade 
            // transitionTime={3000}
            autoPlay={true}
            duration={3000}
            transitionDuration={500}
            prevArrow={<div style={{width: "50px", marginRight: "-50px"}}><img className="Slideshow_arrowleft" src={LeftArrow} alt="left arrow"/></div>}
            nextArrow={<div style={{width: "50px", marginLeft: "-100px"}}><img className="Slideshow_arrowright" src={RightArrow} alt="right arrow"/></div>}
            pauseOnHover={true}
            indicators={i => (<div className="dot"/>)}
            style={{maxHeight: props.maxHeight}}
        >
            {props.children}
        </Fade>
    );
};
export default Slideshow;