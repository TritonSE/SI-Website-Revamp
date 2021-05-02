import React from "react";

import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";

export default function PageLayout(props) {

    return(
        <div style={{overflowX: "hidden", height: "100vh"}}>
           <NavBar/>
            {props.children}
           <Footer/>
        </div>
    );
};