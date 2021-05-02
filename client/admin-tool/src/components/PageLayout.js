import React from "react";

import NavBar from "./NavBar";
import "../css/PageLayout.css";

export default function PageLayout(props) {
    return (
        <div className="page-layout-container">
            <NavBar />
            {props.children}
        </div>
    );
}
