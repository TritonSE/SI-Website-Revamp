import React from "react";
import CustomButton from "../CustomButton.js";
import "../../css/BeInvolved.css";
 
 export default function BeInvolved({ description, image_url, button_title, redirect_link, openInSameTab, isMobile }) {
    
     return (
        <div id={button_title} className="involve-section" style={{backgroundImage:`url("${image_url}")`}}>
            <div className="overlay">
                <p> {description} </p>
                <CustomButton
                openInSameTab={openInSameTab}
                redirect_link={redirect_link}
                text={button_title}
                />
            </div>
        </div>
     );
 }