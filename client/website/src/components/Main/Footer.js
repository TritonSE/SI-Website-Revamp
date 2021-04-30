import React from "react";
import {SITE_PAGES} from "../../constants/links";
import "../../css/Footer.css";

import {AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai";

export default function Footer() {
    return(
        <div className="Footer-Main-Container">
            <section className="Footer-Pages">
                <a href={SITE_PAGES.HOME}> Home </a>
                <a href={SITE_PAGES.HOME}> Conferences </a>
                <a href={SITE_PAGES.HOME}> Resouces </a>
                <a href={SITE_PAGES.HOME}> About Us </a>
                <a href={SITE_PAGES.HOME}> Contact Us </a>
            </section>
            <section className="Footer-Bottom">
                <section className="Footer-Social-Media">
                    <a href="https://material-ui.com/components/icons/">
                        <AiOutlineFacebook 
                        style={{color: "white"}}
                        // onMouseOver={({target})=>target.style.color='red'} 
                        // onMouseOut={({target})=>target.style.color='white'}
                        />
                    </a>
                    <AiOutlineInstagram style={{color: "white"}}/>
                </section>
                <p> logo </p>

            </section>
        </div>
    );
};