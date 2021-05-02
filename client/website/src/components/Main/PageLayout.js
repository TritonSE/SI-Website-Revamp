import React from "react";

import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";

export default function PageLayout(props) {
    
    document.body.style.overflowX = "hidden";

    return(
        <div>
           <NavBar/>
            {props.children}
           <Footer/>
        </div>
    );
};