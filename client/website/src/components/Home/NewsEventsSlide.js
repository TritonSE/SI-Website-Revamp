import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import "../../css/NewsEventsSlide.css";
 
 export default function NewsEventsSlide({ title, description, image_url, redirect_link, openInSameTab, isMobile }) {
     // props title, author name, image_url, redirect link, isMobile style={{background: `url(${image_url})`, height: "600px"}}
     return (
         <div className="NewsEventsSlide" style={{backgroundImage:`url("${image_url}")`, height: `${isMobile ? "300px": "600px"}`}}>
             <div className="info-container">
                 <h1 className="news-slide-info"> {title} </h1>
                 {
                     description ?
                      <p className="news-slide-info"> {description}</p>:
                      null
                 }
                 <a className="news-slide-info" href={redirect_link} target={openInSameTab ? null:"_blank"} rel={openInSameTab ? null:"noreferrer noopener"}>
                    <button> Learn More </button>
                 </a>
             </div>
             <div className="circle-arrow">
                <FiArrowDownCircle/>
             </div>
         </div>
     );
 }