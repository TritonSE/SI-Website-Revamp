import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import LeftArrow from '../../media/leftarrow.svg';
import RightArrow from '../../media/rightarrow.svg';

import "../../css/Slideshow.css";

const Slideshow = (props) => {
    // required props height and width
    // This determines the height and width of the container slideshow
    // if the props passed in are larger, then 
    return(
        <Fade 
            autoPlay={true}
            duration={3000}
            transitionDuration={500}
            prevArrow={<div style={{width: "50px", marginRight: "-50px"}}><img className="Slideshow_arrowleft" src={LeftArrow} alt="left arrow"/></div>}
            nextArrow={<div style={{width: "50px", marginLeft: "-100px"}}><img className="Slideshow_arrowright" src={RightArrow} alt="right arrow"/></div>}
            pauseOnHover={true}
            indicators={i => (<div className="dot"/>)}
            style={{maxHeight: props.height, minHeight: props.height, width: props.width}}
            className="Slideshow"
        >
            {props.children}
        </Fade>
    );
};
export default Slideshow;