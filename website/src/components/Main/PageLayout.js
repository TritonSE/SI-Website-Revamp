import React from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function PageLayout(props) {
    return(
        <div>
           <NavBar/>
            {props.children}
           <Footer/>
        </div>
    );
};