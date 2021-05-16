/**
 * Slideshow component built with react-slideshow-image. Takes in children
 * components (should be divs) and renders them in a slideshow with custom
 * arrows and indicators. The slideshow requires height and width props, that
 * update the size of the component, BUT THE SLIDES MUST BE THE SAME SIZE or
 * else you will have padding issues.
 * @author PatrickBrown1
 */

import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import LeftArrow from "../media/leftarrow.svg";
import RightArrow from "../media/rightarrow.svg";

import "../css/Slideshow.css";

const Slideshow = (props) => (
    // required props: height, width
    <Fade
        autoPlay
        duration={3000}
        transitionDuration={500}
        prevArrow={
            <div style={{ width: "50px", marginRight: "-50px" }}>
                <img className="Slideshow_arrowleft" src={LeftArrow} alt="left arrow" />
            </div>
        }
        nextArrow={
            <div style={{ width: "50px", marginLeft: "-100px" }}>
                <img className="Slideshow_arrowright" src={RightArrow} alt="right arrow" />
            </div>
        }
        pauseOnHover
        indicators={() => <div className="dot" />}
        style={{ maxHeight: props.height, minHeight: props.height, width: props.width }}
        className="Slideshow"
    >
        {props.children}
    </Fade>
);
export default Slideshow;
